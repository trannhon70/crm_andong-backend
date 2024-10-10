import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { DoctorsService } from "./doctor.service";

@Controller('doctor')

export class DiseaseController {
    constructor(
        private readonly doctorsService: DoctorsService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.doctorsService.create(req, body);
        return {
            statusCode: 1,
            message: 'create doctor suscess!',
            data: data,
        };
    }

    @Get('get-paging')
    async getpaging(@Query() query: any) {
        const data = await this.doctorsService.getpaging(query);
        return {
            statusCode: 1,
            message: 'get paging doctor success',
            data: data,
        };
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {

        const data = await this.doctorsService.delete(id);
        return {
            statusCode: 1,
            message: 'delete doctor suscess!',
            data: data,
        };
    }

    @Get('get-by-id/:id')
    async getById(@Param('id') id: number) {

        const data = await this.doctorsService.getById(id);
        return {
            statusCode: 1,
            message: 'get by id doctor suscess!',
            data: data,
        };
    }

    @Put('update/:id')
    async update(@Param('id') id: number,@Body() body: any){
        const data = await this.doctorsService.update(id,body);
        return {
            statusCode: 1,
            message: 'update doctor suscess!',
            data: data,
        };
    }
}