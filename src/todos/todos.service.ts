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
        console.log(dto, 'dto');
        
        const todo = this.todoRepository.create(dto);
        return await this.todoRepository.save(todo)
    }
}