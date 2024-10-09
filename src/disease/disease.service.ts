import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Diseases } from "./disease.entity";
import { currentTimestamp } from "utils/currentTimestamp";


export class DiseasesService {
    constructor(
        @InjectRepository(Diseases) 
        private readonly diseaseRepository: Repository<Diseases>,
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
            created_at: currentTimestamp,
            departmentId: body.departmentId
        }
        const todo = this.diseaseRepository.create(data);
        return await this.diseaseRepository.save(todo)
    }
}