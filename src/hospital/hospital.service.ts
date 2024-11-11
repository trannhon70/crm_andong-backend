import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Hospitals } from "./hospital.entity";
import { HospitalDto } from "./dtos/hospital.dto";
import { BadRequestException } from "@nestjs/common";
import { currentTimestamp } from "utils/currentTimestamp";
import { JwtService } from "@nestjs/jwt";


export class HospitalsService {
    constructor(
        @InjectRepository(Hospitals) 
        private readonly hospitalsRepository: Repository<Hospitals>,
        private readonly jwtService: JwtService 
    ){}

    async create(body: HospitalDto, req: any){
        const check = await this.hospitalsRepository.findOne({ where: { name: body.name } });
        if (check) {
            throw new BadRequestException('Tên Bệnh viện đã được đăng ký, vui lòng đăng ký tên khác!');
        }

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        const decoded = await this.jwtService.verify(token);
        
        const data : HospitalDto = {
            name: body.name,
            phone: body.phone,
            author: decoded.email,
            created_at: currentTimestamp()
        }
        const todo = this.hospitalsRepository.create(data);
        return await this.hospitalsRepository.save(todo)
    }

    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1; 
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;  
        const search = query.search ? query.search.trim() : '';

        const skip = (pageIndex - 1) * pageSize; 

        const [result, total] = await this.hospitalsRepository.findAndCount({
            // select: ['id', 'name', 'created_at'],
            where: search
            ? { name: Like(`%${search}%`) } 
            : {},
            skip: skip,
            take: pageSize,
            order: {
                created_at: 'ASC', 
            },
            // relations: ['users'],
        });

        return {
            data: result,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }


    async getById (id: number) {
        if(id){
            const result = await this.hospitalsRepository.findOne({
                where: {id}
            })
            return result
        }
    }

    async getAll () {
        const result = await this.hospitalsRepository.find()
        return result
    }

    async update (id: number, body:any) {
        const hospital = await this.hospitalsRepository.findOne({
            where:{id}
        }); 

        if (!hospital) {
            throw new Error('hospital not found');
        }

        Object.assign(hospital, body);
        return await this.hospitalsRepository.save(hospital);
    }
    
    async delete (id: number) {
        if(id){
            return this.hospitalsRepository.delete(id)
        }
    }
}