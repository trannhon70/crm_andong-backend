import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "src/patient/patient.entity";
import { Users } from "src/users/users.entity";
import { Repository } from "typeorm";



export class FileService {
    constructor(

        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        private readonly jwtService: JwtService
    ) { }

    async getpaging(req: any, query: any) {}

}