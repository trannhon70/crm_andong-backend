import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
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

   @Get('get-all/:id')
   async getAllByIdHospital(@Req() req: any, @Param('id') id : number){
        const data = await this.departmentsService.getAllByIdHospital(req,id);
        return {
            statusCode: 1,
            message: 'get all suscess!',
            data: data,
        };
   }

   @Get('get-paging')
   async getpaging(@Query() query: any) {
       const data = await this.departmentsService.getpaging(query);
       return {
           statusCode: 1,
           message: 'get paging department success',
           data: data,
       };
   }

   @Delete('delete/:id')
    async delete(@Param('id') id: number) {

        const data = await this.departmentsService.delete(id);
        return {
            statusCode: 1,
            message: 'delete department suscess!',
            data: data,
        };
    }

    @Get('get-by-id/:id')
    async getById(@Param('id') id: number) {

        const data = await this.departmentsService.getById(id);
        return {
            statusCode: 1,
            message: 'get by id department suscess!',
            data: data,
        };
    }
    @Put('update/:id')
    async update(@Param('id') id: number,@Body() body: any){
        const data = await this.departmentsService.update(id,body);
        return {
            statusCode: 1,
            message: 'update department suscess!',
            data: data,
        };
    }
}