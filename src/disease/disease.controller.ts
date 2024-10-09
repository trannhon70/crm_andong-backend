
import { Body, Controller, Get, Post, Query, Req } from "@nestjs/common";
import { DiseasesService } from "./disease.service";


@Controller('disease')

export class DiseaseController {
    constructor (
        private readonly diseasesService: DiseasesService
    ){}

    @Post('create')
    async create(@Req() req: any,@Body() body: any){
       
       const data = await this.diseasesService.create(req,body);
       return {
           statusCode: 1,
           message: 'create disease suscess!',
           data: data,
       };
   }

   @Get('get-paging')
     async getpaging(@Query() query: any){
        const data = await this.diseasesService.getpaging(query);
        return {
            statusCode: 1,
            message: 'get paging role success',
            data: data,
        };
    }
}   