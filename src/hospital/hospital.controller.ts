import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { HospitalsService } from "./hospital.service";

@Controller('hospital')
export class HospitalController {
    constructor (
        private readonly hospitalsService: HospitalsService
    ){}

    @Post()
    create(@Body() dto: any){
        return this.hospitalsService.create(dto);
    }

   
}