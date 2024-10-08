import { Body, Controller, Post, Req } from "@nestjs/common";
import { DepartmentsService } from "./department.service";


@Controller('department')

export class DepartmentController {
    constructor (
        private readonly departmentsService: DepartmentsService
    ){}

    @Post('create')
    async create(@Req() req: any,@Body() body: any){
       
       const data = await this.departmentsService.create(req,body);
       return {
           statusCode: 1,
           message: 'create department suscess!',
           data: data,
       };
   }
}