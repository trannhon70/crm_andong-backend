import { InjectRepository } from "@nestjs/typeorm";
import { HistoryLogin } from "./historyLogin.entity";
import { Like, Repository } from "typeorm";


export class HistoryLoginService {
    constructor(
        @InjectRepository(HistoryLogin)
        private readonly historyLoginRepository: Repository<HistoryLogin>,
    ) { }
    async getpaging(query: any) {
        const pageIndex = query.pageIndex ? parseInt(query.pageIndex, 10) : 1;
        const pageSize = query.pageSize ? parseInt(query.pageSize, 10) : 10;
        const search = query.search ? query.search.trim() : '';
        const action = query.action

        const skip = (pageIndex - 1) * pageSize;

        let whereCondition = '';
        const parameters: any = {};

        if (action) {
            whereCondition += 'history-login.action = :action';
            parameters.action = action;
        }

        if (search) {
            if (whereCondition) whereCondition += ' AND ';
            whereCondition += '(history-login.fullName LIKE :search OR history-login.ip LIKE :search )';
            parameters.search = `%${search}%`;
        }

        const qb = this.historyLoginRepository.createQueryBuilder('history-login')
            .skip(skip)
            .take(pageSize)
            .orderBy('history-login.id', 'DESC');
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
}