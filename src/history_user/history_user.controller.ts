import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { HistoryUserService } from './history_user.service';

@Controller('history-user')
export class HistoryUserController {
  constructor(private readonly historyUserService: HistoryUserService) {}

  @Post('create')
  create(@Req() req:any, @Body() body: any) {
    return this.historyUserService.create(req, body);
  }

  
}
