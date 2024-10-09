import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Diseases } from "./disease.entity";
import { currentTimestamp } from "utils/currentTimestamp";
import { Hospitals } from "src/hospital/hospital.entity";


export class DiseasesService {
    constructor(
        @InjectRepository(Diseases) 
        private readonly diseaseRepository: Repository<Diseases>,
        @InjectRepository(Hospitals) 
        private readonly hospitalRepository: Repository<Hospitals>,
        private readonly jwtService: JwtService
    ){}

    async create(req : any, body: any){

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
            isshow:true,
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
        const isshow = query.isshow ;
        console.log(isshow);
        
        const skip = (pageIndex - 1) * pageSize;
    
        const qb = this.diseaseRepository.createQueryBuilder('disease')
            .leftJoinAndSelect('disease.hospital', 'hospital')
            .leftJoinAndSelect('disease.user', 'user')
            .leftJoinAndSelect('disease.department', 'department')
            .skip(skip)
            .take(pageSize)
            .orderBy('disease.id', 'DESC');
        if(hospitalId !== 0){
            qb.andWhere('disease.hospitalId = :hospitalId', { hospitalId });
        }
        if(isshow){
            qb.andWhere('disease.isshow = :isshow', { isshow });
        }
        if (search) {
            qb.where('disease.name LIKE :search', { search: `%${search}%` });
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
    
    
}