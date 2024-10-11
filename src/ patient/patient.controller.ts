import { Body, Controller, Post, Req } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientDto } from "./dto/patient.dto";


@Controller('patient')

export class PatientController {
    constructor(
        private readonly patientService: PatientService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: PatientDto) {

        const data = await this.patientService.create(req, body);
        return {
            statusCode: 1,
            message: 'create patient suscess!',
            data: data,
        };
    }
}