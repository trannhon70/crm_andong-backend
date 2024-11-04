import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientDto } from "./dto/patient.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { MyGateway } from "src/gateway/gateway";


@Controller('patient')

export class PatientController {
    constructor(
        private readonly patientService: PatientService,
        private readonly appGateway: MyGateway
    ) { }

    @Post('create')
    async create(@Req() req: any, @Body() body: any) {

        const data: any = await this.patientService.create(req, body);
        
        //  this.appGateway.onNewMessage(data)
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
   async delete(@Req() req: any ,@Param('id') id: number) {

       const data = await this.patientService.delete(req,id);
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

   @Post('upload/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const fileExt = file.originalname.split('.').pop();
                const filename = `${file.fieldname}-${uniqueSuffix}.${fileExt}`;
                callback(null, filename);
            }
        })
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File,@Param('id') id: number) {
        const fileData = await this.patientService.uploadFile(file, id);
        return {
            statusCode: 1,
            message: 'File uploaded successfully!',
            data: fileData,
        };
    }

    @Get('get-history-action/:id')
    async getHistoryAction(@Param('id') id: number){
       const data = await this.patientService.getHistoryAction(id);
       return {
           statusCode: 1,
           message: 'get patient by id success!',
           data: data,
       };
   }

   @Get('get-thong-ke-ngay-hien-tai')
    async getThongKeNgayHienTai( @Req() req: any ,@Query() query: any){
       const data = await this.patientService.getThongKeNgayHienTai(req, query);
       return {
           statusCode: 1,
           message: 'get thong ke success!',
           data: data,
       };
   }

   @Get('get-thong-ke-all')
    async getThongKeAll( @Req() req: any ,@Query() query: any){
       const data = await this.patientService.getThongKeAll(req, query);
       return {
           statusCode: 1,
           message: 'get thong ke success!',
           data: data,
       };
   }
   
}