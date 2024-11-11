import { InjectRepository } from "@nestjs/typeorm";
import { Media } from "./media.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { currentTimestamp } from "utils/currentTimestamp";
import { NotFoundException } from "@nestjs/common";


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

        const check = await this.mediaRepository.findOne({
            where: {name: body.name, hospitalId : body.hospitalId}
        });

        if(check) {
            throw new NotFoundException('Media này đã tồn tại!');
        }

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

    async getpaging(req: any, query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const hospitalId = query.hospitalId || 0;
        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (hospitalId !== 0) {
            whereCondition += 'media.hospitalId = :hospitalId'; 
            parameters.hospitalId = hospitalId;
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += '(media.name LIKE :search)';
            parameters.search = `%${search}%`;
        }

        const qb = this.mediaRepository.createQueryBuilder('media')
            .skip(skip)
            .take(pageSize)
            .orderBy('media.id', 'DESC');
        if (whereCondition) {
            qb.where(whereCondition, parameters);
        }

        const [result, total] = await qb.getManyAndCount();
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
            const result = await this.mediaRepository.findOne({
                where: {id}
            })
            return result
        }
    }

    async update (id: number, body:any) {
        const media = await this.mediaRepository.findOne({
            where:{id}
        }); 

        if (!media) {
            throw new Error('Media not found');
        }

        Object.assign(media, body);
        return await this.mediaRepository.save(media);
    }

    async delete (id: number) {
        if(id){
            return this.mediaRepository.delete(id)
        }
    }
}