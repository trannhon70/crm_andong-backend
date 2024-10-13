import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { CityService } from "./city.service";


@Controller('city')

export class cityController {
    constructor(
        private readonly cityService: CityService
    ) { }
    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.cityService.create(req, body);
        return {
            statusCode: 1,
            message: 'create city suscess!',
            data: data,
        };
    }

    @Get('get-all')
    async getAll(){
       const data = await this.cityService.getAll();
       return {
           statusCode: 1,
           message: 'get all city success',
           data: data,
       };
   }
}