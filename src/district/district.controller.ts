

import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { DistrictService } from "./district.service";


@Controller('district')

export class districtController {
    constructor(
        private readonly districtService: DistrictService
    ) { }
    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.districtService.create(req, body);
        return {
            statusCode: 1,
            length: data.length,
            message: 'create district suscess!',
            data: data,
        };
    }

    @Get('get-by-id/:id')
    async getByIdCity(@Param('id') id: number){
       const data = await this.districtService.getByIdCity(id);
       return {
           statusCode: 1,
           
           message: 'get all city success',
           data: data,
           
       };
   }
}