
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { DiseasesService } from "./disease.service";


@Controller('disease')

export class DiseaseController {
    constructor(
        private readonly diseasesService: DiseasesService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.diseasesService.create(req, body);
        return {
            statusCode: 1,
            message: 'create disease suscess!',
            data: data,
        };
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {

        const data = await this.diseasesService.delete(id);
        return {
            statusCode: 1,
            message: 'delete disease suscess!',
            data: data,
        };
    }

    @Get('get-paging')
    async getpaging(@Query() query: any) {
        const data = await this.diseasesService.getpaging(query);
        return {
            statusCode: 1,
            message: 'get paging role success',
            data: data,
        };
    }

    @Get('get-by-id/:id')
    async getById(@Param('id') id: number) {

        const data = await this.diseasesService.getById(id);
        return {
            statusCode: 1,
            message: 'get by id disease suscess!',
            data: data,
        };
    }

    @Get('get-by-id-department')
    async getByIdDepartment(@Query() query: any) {

        const data = await this.diseasesService.getByIdDepartment(query);
        return {
            statusCode: 1,
            message: 'get by id department suscess!',
            data: data,
        };
    }

    @Put('update/:id')
    async update(@Param('id') id: number,@Body() body: any){
        const data = await this.diseasesService.update(id,body);
        return {
            statusCode: 1,
            message: 'update disease suscess!',
            data: data,
        };
    }
}   