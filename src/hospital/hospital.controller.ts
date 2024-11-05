import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { HospitalsService } from "./hospital.service";
import { HospitalDto } from "./dtos/hospital.dto";

@Controller('hospital')
export class HospitalController {
    constructor (
        private readonly hospitalsService: HospitalsService
    ){}

    @Post('create')
    create(@Body() body: HospitalDto,  @Req() req: any){
        return this.hospitalsService.create(body, req);
    }

    @Get('get-paging')
    async getpaging(@Query() queryDto: any){
       const data = await this.hospitalsService.getpaging(queryDto);
       return {
           statusCode: 1,
           message: 'get paging hospital success',
           data: data,
       };
   }

   @Get('get-all')
    async getAll(){
       const data = await this.hospitalsService.getAll();
       return {
           statusCode: 1,
           message: 'get all hospital success',
           data: data,
       };
   }

   @Get('get-by-id/:id')
   async getById(@Param('id') id: number){
      const data = await this.hospitalsService.getById(id);
      return {
          statusCode: 1,
          message: 'get hospital by id success!',
          data: data,
      };
  }
}