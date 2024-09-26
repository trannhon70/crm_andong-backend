import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodoController {
    constructor (
        private readonly todosService: TodosService
    ){}

    @Post()
    create(@Body() dto: CreateTodoDto){
        return this.todosService.create(dto);
    }

    @Get()
    findAll(
        @Query('page') page: string = '1',
        @Query('limit') limit: string = '2',
        @Query('email') email?: string  
    ) {
        return this.todosService.findAll(Number(page), Number(limit), email);
    }
}