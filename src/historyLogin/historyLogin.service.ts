import { InjectRepository } from "@nestjs/typeorm";
import { HistoryLogin } from "./historyLogin.entity";
import { Like, Repository } from "typeorm";


export class HistoryLoginService {
    constructor(
        @InjectRepository(HistoryLogin) 
        private readonly historyLoginRepository: Repository<HistoryLogin>,
    ){}
    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1; 
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;  
        const search = query.search ? query.search.trim() : '';

        const skip = (pageIndex - 1) * pageSize; 

        const [result, total] = await this.historyLoginRepository.findAndCount({
            where: search
            ? { ip: Like(`%${search}%`) } 
            : {},
            skip: skip,
            take: pageSize,
            order: {
                created_at: 'ASC', 
            },
            relations: ['users'],
        });

        return {
            data: result,
            total: total,
            pageIndex: pageIndex,
            pageSize: pageSize,
            totalPages: Math.ceil(total / pageSize),
        };
    }
}