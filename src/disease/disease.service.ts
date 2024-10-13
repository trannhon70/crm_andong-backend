import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Diseases } from "./disease.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { Hospitals } from "src/hospital/hospital.entity";
import { NotFoundException } from "@nestjs/common";


export class DiseasesService {
    constructor(
        @InjectRepository(Diseases)
        private readonly diseaseRepository: Repository<Diseases>,
        @InjectRepository(Hospitals)
        private readonly hospitalRepository: Repository<Hospitals>,
        private readonly jwtService: JwtService
    ) { }

    async create(req: any, body: any) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token);
        const userId = decoded.id;

        const data: any = {
            name: body.name,
            userId: userId,
            hospitalId: body.hospitalId,
            isshow: true,
            created_at: currentTimestamp(),
            departmentId: body.departmentId
        }
        const todo = this.diseaseRepository.create(data);
        return await this.diseaseRepository.save(todo)
    }

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId;
        const isshow = query.isshow;

        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'disease.hospitalId = :hospitalId';
            parameters.hospitalId = hospitalId;
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'disease.name LIKE :search';
            parameters.search = `%${search}%`;
        }

        if (isshow) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += 'disease.isshow = :isshow';
            parameters.isshow = isshow;
        }

        const qb = this.diseaseRepository.createQueryBuilder('disease')
            .leftJoinAndSelect('disease.hospital', 'hospital')
            .leftJoinAndSelect('disease.user', 'user')
            .leftJoinAndSelect('disease.department', 'department')
            .skip(skip)
            .take(pageSize)
            .orderBy('disease.id', 'DESC');
        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        const [result, total] = await qb.getManyAndCount();

        return {
            data: result.map(disease => ({
                ...disease,
                hospital: disease.hospital, // Includes hospital data
                user: {
                    ...disease.user,
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
            return this.diseaseRepository.delete(id)
        }
    }

    async getById(id: number) {
        if (id) {
            return this.diseaseRepository.findOne({
                where: { id }
            })
        }
    }

    async getByIdDepartment(query: any) {
        const {hospitalId, departmentId} = query
        if (hospitalId && departmentId) {
            return this.diseaseRepository.find({
                where: { 
                    hospitalId :hospitalId ,
                    departmentId :departmentId ,
                 }
            })
        }
    }

    async update(id: number, body: any) {
        if (id) {
            const disease = await this.diseaseRepository.findOne({
                where: { id },
            });

            if (!disease) {
                throw new NotFoundException(`Disease with ID ${id} not found`);
            }

            const data: any = {
                departmentId: body.departmentId,
                name: body.name,
            }

            Object.assign(disease, data);
            return await this.diseaseRepository.save(disease);
        }
    }
}