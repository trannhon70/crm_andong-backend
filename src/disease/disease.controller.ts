
import { Body, Controller, Post, Req } from "@nestjs/common";
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
}