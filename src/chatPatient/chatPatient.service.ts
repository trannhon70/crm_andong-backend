import { InjectRepository } from "@nestjs/typeorm";
import { ChatPatient } from "./chatPatient.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";


export class ChatPatientService {
    constructor(
        @InjectRepository(ChatPatient)
        private readonly ChatPatientRepository: Repository<ChatPatient>,

        private readonly jwtService: JwtService
    ) { }


    async create(req: any, body: any) {
        
    }
}