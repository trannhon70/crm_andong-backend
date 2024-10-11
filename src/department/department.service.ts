import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Departments } from "./department.entity";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { currentTimestamp } from "utils/currentTimestamp";
import { JwtService } from "@nestjs/jwt";


export class DepartmentsService {
    constructor(
        @InjectRepository(Departments)
        private readonly departmentRepository: Repository<Departments>,
        private readonly jwtService: JwtService
    ) { }

    async create(req: any, body: any) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token); // Assuming you use JWT
        const userId = decoded.id;


        const data: any = {
            name: body.name,
            userId: userId,
            hospitalId: body.hospitalId,
            created_at: currentTimestamp()
        }
        const todo = this.departmentRepository.create(data);
        return await this.departmentRepository.save(todo)
    }

    async getAllByIdHospital(req: any, id: number) {

        if (id) {
            return this.departmentRepository.find({
                where: { hospitalId: id }
            })
        }
    }

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId;

        const skip = (pageIndex - 1) * pageSize;

        // Prepare query conditions first
        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'department.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'department.name LIKE :search';
            parameters.search = `%${search}%`;
        }

        // Create QueryBuilder for the departments and apply conditions
        const qb = this.departmentRepository.createQueryBuilder('department')
            .leftJoinAndSelect('department.hospital', 'hospital')
            .leftJoinAndSelect('department.user', 'user')
            .skip(skip)
            .take(pageSize)
            .orderBy('department.id', 'DESC');

        // Apply the prepared where condition
        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        // Execute the query to fetch the filtered results and count
        const [result, total] = await qb.getManyAndCount();

        // Map the result to exclude sensitive information (like password)
        return {
            data: result.map(department => ({
                ...department,
                hospital: department.hospital, // Includes hospital data
                user: {
                    ...department.user,
                    password: undefined // Exclude the password field
                }
            })),
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }
    async delete(id: number) {
        if (id) {
            return this.departmentRepository.delete(id)
        }
    }

    async getById(id: number) {
        if (id) {
            return this.departmentRepository.findOne({
                where: { id }
            })
        }
    }

    async update(id: number, body: any) {
        if (id) {
            const disease = await this.departmentRepository.findOne({
                where: { id },
            });

            if (!disease) {
                throw new NotFoundException(`Disease with ID ${id} not found`);
            }

            const data: any = {
                name: body.name,
            }

            Object.assign(disease, data);
            return await this.departmentRepository.save(disease);
        }
    }
}