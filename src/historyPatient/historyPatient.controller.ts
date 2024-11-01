import { Controller, Get, Param } from "@nestjs/common";
import { HistoryPatientService } from "./historyPatient.service";


@Controller('history-patient')
export class HistoryPatientController {
    constructor (
        private readonly historyPatientService: HistoryPatientService
    ){}

    @Get('get-all/:id')
    async getHistoryAction(@Param('id') id: number){
       const data = await this.historyPatientService.getHistoryAction(id);
       return {
           statusCode: 1,
           message: 'get patient by id success!',
           data: data,
       };
   }
}