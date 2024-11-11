import { Controller, Delete, Get, Param, Query } from "@nestjs/common";
import { HistoryLoginService } from "./historyLogin.service";


@Controller('history-login')
export class HistoryLoginController {
    constructor (
        private readonly historyLoginService: HistoryLoginService
    ){}
    @Get('get-paging')
    async getpaging(@Query() query: any){
       const data = await this.historyLoginService.getpaging(query);
       return {
           statusCode: 1,
           message: 'get paging history login success',
           data: data,
       };
   }

   @Delete('delete/:id')
    async delete(@Param('id') id: number){
        try {
            const data = await this.historyLoginService.delete(id);
            return {
                statusCode: 1,
                message: 'delete history login success!',
                data: data
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}