import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";


@Module({
    imports:[TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers:[UsersService],
})
export class UsersModule{}