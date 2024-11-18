import { Body, Controller, Get, Param, Put, Query, Req } from "@nestjs/common";
import { NotificationService } from "./notification.service";


@Controller('notication')
export class noticationController {
    constructor (
        private readonly noticationService: NotificationService
    ){}

    @Get('get-paging')
    async getPaging(@Req() req: any,@Query() query: any){
        const data = await this.noticationService.getpaging(req, query);
        return {
            statusCode: 1,
            message: 'get paging notication success',
            data: data,
        };
    }

    @Put('update-status/:id')
    async updateStatus(@Req() req: any ,@Param('id') id: number,@Body() body: any){
        const data = await this.noticationService.updateStatus(req, id,body);
        return {
            statusCode: 1,
            message: 'update status notication suscess!',
            data: data,
        };
    }
}