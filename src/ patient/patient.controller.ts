import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
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
           message: 'get patient by id success!',
           data: data,
       };
   }

   @Delete('delete/:id')
   async delete(@Param('id') id: number) {

       const data = await this.patientService.delete(id);
       return {
           statusCode: 1,
           message: 'delete patient suscess!',
           data: data,
       };
   }

   @Put('update/:id')
   async update(@Req() req: any ,@Param('id') id: number,@Body() body: any){
       const data = await this.patientService.update(req, id,body);
       return {
           statusCode: 1,
           message: 'update disease suscess!',
           data: data,
       };
   }
   
}