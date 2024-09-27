import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";


export class TodosService {
    constructor(
        @InjectRepository(Todo) 
        private readonly todoRepository: Repository<Todo>,
    ){}

    async create(dto: CreateTodoDto){
        const todo = this.todoRepository.create(dto);
        return await this.todoRepository.save(todo)
    }

    async findAll(page: number = 1, limit: number = 10, email?: string) {
        page = Number(page);  // Chuyển đổi page thành số
        limit = Number(limit);  // Chuyển đổi limit thành số
    
        if (isNaN(page) || isNaN(limit)) {
            throw new Error('Page and limit must be numeric values');
        }
    
        const query = this.todoRepository.createQueryBuilder('todos');
        
        
        // Thêm điều kiện tìm kiếm email nếu có
        if (email) {
            query.where('todos.email LIKE :email', { email: `%${email}%` });
        }
    
        const [data, total] = await query
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();  // Lấy dữ liệu và số lượng bản ghi
    
        return {
            data,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        };
    }
}