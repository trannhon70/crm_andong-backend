import { Controller, Get, Query } from "@nestjs/common";
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
}