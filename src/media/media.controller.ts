import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
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
    async getall(@Param('id') id: number) {
        const data = await this.mediasService.getall(id);
        return {
            statusCode: 1,
            message: 'get all success',
            data: data,
        };
    }

    @Get('get-paging')
     async getpaging(@Req() req: any, @Query() query: any){
        const data = await this.mediasService.getpaging(req, query);
        return {
            statusCode: 1,
            message: 'get paging media success',
            data: data,
        };
    }

    @Get('get-by-id/:id')
     async getById(@Param('id') id: number){
        const data = await this.mediasService.getById(id);
        return {
            statusCode: 1,
            message: 'get media by id success!',
            data: data,
        };
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() body: any) {
        try {
                const data = await this.mediasService.update(id, body)
                return {
                    statusCode: 1,
                    message: 'update role success!',
                    data: data
                }
        } catch (error) {
            console.log(error);
            
        }
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number){
        try {
            const data = await this.mediasService.delete(id);
            return {
                statusCode: 1,
                message: 'delete media success!',
                data: data
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}
