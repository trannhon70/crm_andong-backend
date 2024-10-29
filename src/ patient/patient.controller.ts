import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientDto } from "./dto/patient.dto";


@Controller('patient')

export class PatientController {
    constructor(
        private readonly patientService: PatientService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.patientService.create(req, body);
        return {
            statusCode: 1,
            message: 'create patient suscess!',
            data: data,
        };
    }

    @Get('get-paging')
     async getpaging( @Req() req: any ,@Query() query: any){
        const data = await this.patientService.getpaging(req ,query);
        return {
            statusCode: 1,
            message: 'get paging patient success!',
            data: data,
        };
    }

    @Get('get-by-id/:id')
    async getById(@Param('id') id: number){
       const data = await this.patientService.getById(id);
       return {
           statusCode: 1,
           message: 'get role by id success!',
           data: data,
       };
   }
}