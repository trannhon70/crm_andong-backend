import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Doctor } from "./doctor.entity";
import { JwtService } from "@nestjs/jwt";
import { currentTimestamp } from "utils/currentTimestamp";
import { NotFoundException } from "@nestjs/common";


export class DoctorsService {
    constructor(
        @InjectRepository(Doctor) 
        private readonly doctorRepository: Repository<Doctor>,
        
        private readonly jwtService: JwtService
    ){}


    async create (req:any, body:any){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token); 
        const userId = decoded.id;
        
        const data : any = {
            name: body.name,
            userId: userId,
            hospitalId: body.hospitalId,
            doctor_office:body.doctor_office,
            created_at: currentTimestamp(),
        }
        const todo = this.doctorRepository.create(data);
        return await this.doctorRepository.save(todo)
    }

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1; 
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;  
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId;
        const isshow = query.isshow ;
        
        const skip = (pageIndex - 1) * pageSize;
    
        const qb = this.doctorRepository.createQueryBuilder('doctor')
            .leftJoinAndSelect('doctor.hospital', 'hospital')
            .leftJoinAndSelect('doctor.user', 'user')
            .skip(skip)
            .take(pageSize)
            .orderBy('doctor.id', 'DESC');
        if(hospitalId !== 0){
            qb.andWhere('doctor.hospitalId = :hospitalId', { hospitalId });
        }
        if(isshow){
            qb.andWhere('doctor.isshow = :isshow', { isshow });
        }
        if (search) {
            qb.where('doctor.name LIKE :search', { search: `%${search}%` });
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

    async delete(id: number){
        if(id){
            return this.doctorRepository.delete(id)
        }
    }

    async getById (id: number) {
        if(id){
            return this.doctorRepository.findOne({
                where:{id}
            })
        }
    }

    async update(id:number, body: any){
        if(id){
            const disease = await this.doctorRepository.findOne({
                where: { id },
            });

            if(!disease){
                throw new NotFoundException(`Doctor with ID ${id} not found`);
            }
            
            const data:any={
                doctor_office: body.doctor_office,
                name: body.name,
            }

            Object.assign(disease, data);
            return await this.doctorRepository.save(disease);
        }
    }
}