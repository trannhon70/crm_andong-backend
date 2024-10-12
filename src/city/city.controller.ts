import { Body, Controller, Post, Req } from "@nestjs/common";
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
}