import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientDto } from "./dto/patient.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { MyGateway } from "src/gateway/gateway";
import { PatientServiceStatistical } from "./patient.serviceStatistical";
import { PatientServiceExport } from "./patient.serviceExport";


@Controller('patient')

export class PatientController {
    constructor(
        private readonly patientService: PatientService,
        private readonly appGateway: MyGateway,
        private readonly patientServiceStatistical: PatientServiceStatistical,
        private readonly patientServiceExport: PatientServiceExport,
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
        const fileData = await this.patientService.uploadFile(file.filename, id);
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

   @Get('thong-ke-dang-ky')
   async GetThongKeDangKy(@Req() req: any ,@Query() query: any){
        const data = await this.patientServiceStatistical.GetThongKeDangKy(req, query);
       return {
           statusCode: 1,
           message: 'get registration statistics success!',
           data: data,
       };
   }

   @Get('danh-sach-xep-hang-tham-kham')
   async GetDanhSachXepHangThamKham(@Req() req: any ,@Query() query: any){
        const data = await this.patientServiceStatistical.GetDanhSachXepHangThamKham(req, query);
       return {
           statusCode: 1,
           message: 'get visit ranking list success!',
           data: data,
       };
   }

   @Get('thong-ke-qua-kenh')
   async GetThongKeQuaKenh(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceStatistical.GetThongKeQuaKenh(req, query);
    return {
        statusCode: 1,
        message: 'get channel statistics success!',
        data: data,
    };
   }

   @Get('thong-ke-khoa')
   async GetThongKeKhoa(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceStatistical.GetThongKeKhoa(req, query);
    return {
        statusCode: 1,
        message: 'get science statistics success!',
        data: data,
    };
   }

   @Get('thong-ke-benh')
   async GetThongKeBenh(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceStatistical.GetThongKeBenh(req, query);
    return {
        statusCode: 1,
        message: 'get disease statistics success!',
        data: data,
    };
   }

   @Get('thong-ke-tu-van')
   async GetThongKeTuVan(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceStatistical.GetThongKeTuVan(req, query);
    return {
        statusCode: 1,
        message: 'get disease statistics success!',
        data: data,
    };
   }

   @Get('xuat-du-lieu-benh-nhan')
   async getXuatDuLieuBenhNhan(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceExport.getXuatDuLieuBenhNhan(req, query);
    return {
        statusCode: 1,
        message: 'get export data patient success!',
        data: data,
    };
   }

   @Get('bao-cao-tong-hop')
   async getBaoCaoTongHop(@Req() req: any ,@Query() query: any){
    const data = await this.patientServiceExport.getBaoCaoTongHop(req, query);
    return {
        statusCode: 1,
        message: 'get summary report patient success!',
        data: data,
    };
   }

   @Post('thong-ke-gioi-tinh')
   async getThongkeGioitinh(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeGioitinh(req, body);
    return {
        statusCode: 1,
        message: 'get summary report patient success!',
        data: data,
    };
   }

   @Post('thong-ke-tuoi')
   async getThongkeTuoi(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTuoi(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('thong-ke-theo-benh')
   async getThongkeTheoBenh(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTheoBenh(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('thong-ke-theo-nguon-truyen-thong')
   async getThongkeTheoNguonTruyenThong(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTheoNguonTruyenThong(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('thong-ke-theo-tinh-trang')
   async getThongkeTheoTinhTrang(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTheoTinhTrang(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('thong-ke-theo-bac-si')
   async getThongkeTheoBacSi(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTheoBacSi(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('thong-ke-theo-dich-vu-khach-hang')
   async getThongkeTheoDichVuKhachHang(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.getThongkeTheoDichVuKhachHang(req, body);
    return {
        statusCode: 1,
        message: 'get age statistics patient success!',
        data: data,
    };
   }

   @Post('import-file-excel')
   async importFileExcel(@Req() req: any , @Body() body: any){
    const data = await this.patientServiceExport.importFileExcel(req, body);
    return {
        statusCode: 1,
        message: 'import file excel success!',
        data: data,
    };
   }
   
}