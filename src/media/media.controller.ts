import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { MediaService } from "./media.service";


@Controller('media')
export class MediaController {
    constructor(
        private readonly mediasService: MediaService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.mediasService.create(req, body);
        return {
            statusCode: 1,
            message: 'create media suscess!',
            data: data,
        };
    }

    @Get('get-all/:id')
    async getpaging(@Param('id') id: number) {
        const data = await this.mediasService.getall(id);
        return {
            statusCode: 1,
            message: 'get paging all success',
            data: data,
        };
    }
}
