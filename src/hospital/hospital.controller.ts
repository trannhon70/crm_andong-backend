import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { HospitalsService } from "./hospital.service";
import { HospitalDto } from "./dtos/hospital.dto";

@Controller('hospital')
export class HospitalController {
    constructor (
        private readonly hospitalsService: HospitalsService
    ){}

    @Post('create')
    create(@Body() body: HospitalDto,  @Req() req: any){
        const data = this.hospitalsService.create(body, req);
        return {
            statusCode: 1,
            message: 'create hospital suscess!',
            data: data,
        };
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

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() body: any) {
      try {
              const data = await this.hospitalsService.update(id, body)
              return {
                  statusCode: 1,
                  message: 'update hospital success!',
                  data: data
              }
      } catch (error) {
          console.log(error);
          
      }
  }

  @Delete('delete/:id')
    async delete(@Param('id') id: number){
        try {
            const data = await this.hospitalsService.delete(id);
            return {
                statusCode: 1,
                message: 'delete hospital success!',
                data: data
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}