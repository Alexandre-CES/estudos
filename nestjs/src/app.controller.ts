//responsável pelas requests
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/test/')
export class TestController{
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}