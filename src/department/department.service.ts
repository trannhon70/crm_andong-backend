import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Departments } from "./department.entity";
import { BadRequestException } from "@nestjs/common";
import { currentTimestamp } from "utils/currentTimestamp";
import { JwtService } from "@nestjs/jwt";


export class DepartmentsService {
    constructor(
        @InjectRepository(Departments) 
        private readonly departmentRepository: Repository<Departments>,
        private readonly jwtService: JwtService
    ){}

    async create(req : any, body: any){

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }

        const decoded = await this.jwtService.verify(token); // Assuming you use JWT
        const userId = decoded.id;
       

        const data : any = {
            name: body.name,
            userId: userId,
            hospitalId: body.hospitalId,
            created_at: currentTimestamp
        }
        const todo = this.departmentRepository.create(data);
        return await this.departmentRepository.save(todo)
    }

    async getAllByIdHospital (req: any, id : number) {
        
        if(id){
            return this.departmentRepository.find({
                where:{hospitalId:id}
            })
        }
    }
}