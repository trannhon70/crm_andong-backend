import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Hospitals } from "./hospital.entity";


export class HospitalsService {
    constructor(
        @InjectRepository(Hospitals) 
        private readonly hospitalsRepository: Repository<Hospitals>,
    ){}

    async create(dto: any){
        const todo = this.hospitalsRepository.create(dto);
        return await this.hospitalsRepository.save(todo)
    }

   
}