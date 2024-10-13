import { Body, Controller, Get, Post, Req } from "@nestjs/common";
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

    @Get('get-all')
    async getpaging() {
        const data = await this.mediasService.getall();
        return {
            statusCode: 1,
            message: 'get paging all success',
            data: data,
        };
    }
}
