import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { PhoneBlacklistService } from './phone-blacklist.service';

@Controller('phone-blacklist')
export class PhoneBlacklistController {
  constructor(private readonly phoneBlacklistService: PhoneBlacklistService) { }

  @Post('create')
  async create(@Req() req: any, @Body() body: any) {
    const data: any = await this.phoneBlacklistService.create(req, body);
    return {
      statusCode: 1,
      message: 'create phone-blacklist suscess!',
      data: data,
    };
  }

  @Delete('delete/:id')
  async delete(@Req() req: any, @Param() param: any) {
    const data: any = await this.phoneBlacklistService.delete(req, param);
    return {
      statusCode: 1,
      message: 'delete phone-blacklist suscess!',
      data: data,
    };
  }

  @Get('get-paging')
  async getPaging(@Req() req: any, @Query() query: any) {
    const data: any = await this.phoneBlacklistService.getPaging(req, query);
    return {
      statusCode: 1,
      message: 'getPaging phone-blacklist suscess!',
      data: data,
    };
  }


}
