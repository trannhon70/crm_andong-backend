import { Body, Controller, Delete, Get, Param, Put, Query, Req } from "@nestjs/common";
import { FileService } from "./file.service";


@Controller('file')
export class FileController {
    constructor (
        private readonly fileService: FileService
    ){}

    @Get('get-paging')
    async getPaging(@Req() req: any,@Query() query: any){
        const data = await this.fileService.getpaging(req, query);
        return {
            statusCode: 1,
            message: 'get paging notication success',
            data: data,
        };
    }
    @Delete('delete/:id')
       async delete(@Req() req: any ,@Param('id') id: number) {
    
           const data = await this.fileService.delete(req,id);
           return {
               statusCode: 1,
               message: 'delete file suscess!',
               data: data,
           };
       }
  
}