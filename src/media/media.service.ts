import { InjectRepository } from "@nestjs/typeorm";
import { Media } from "./media.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { currentTimestamp } from "utils/currentTimestamp";


export class MediaService {
    constructor(
        @InjectRepository(Media) 
        private readonly mediaRepository: Repository<Media>,
        
        private readonly jwtService: JwtService
    ){}

    async create (req:any, body: any){
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
            created_at: currentTimestamp(),
        }
        const todo = this.mediaRepository.create(data);
        return await this.mediaRepository.save(todo)
    }

    async getall(id: number) {
        const result = await this.mediaRepository.find({
            where: {hospitalId: id}
        });
        return result;
    }
}