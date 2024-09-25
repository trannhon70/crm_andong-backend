import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { TodoController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
    imports:[TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
    providers:[TodosService],
})
export class TodosModule{}