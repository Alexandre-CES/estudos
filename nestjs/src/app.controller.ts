//responsável pelas requests
import { Controller, Get, Post, HttpCode, Header, Redirect, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  getWild() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs() {
    return { url: 'https://www.youtube.com' }; //overwrite docs
  }

  @Get('id/:id')
  getCatById(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
}