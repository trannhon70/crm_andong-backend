import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { ChatPatientService } from "./chatPatient.service";


@Controller('chat-patient')

export class ChatPatientController {
    constructor(
        private readonly chatPatientService: ChatPatientService
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data = await this.chatPatientService.create(req, body);
        return {
            statusCode: 1,
            message: 'create chat patient suscess!',
            data: data,
        };
    }
}