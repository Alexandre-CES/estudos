import { Controller, Get, Post, HttpCode, Header, Redirect, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController{
  constructor(private catsService: CatsService){}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/id/:id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }

  @Get('breed')
  @Redirect('https://nestjs.com', 301)
  home(){}

  @Get('ab*cd')
  wildGet(){
    return 'this routes uses a wildcard';
  }

  @Post('create')
  @HttpCode(202)
  @Header('Cache-Control','none')
  async create(@Body() createCatDto: CreateCatDto){
    this.catsService.create(createCatDto);
  }
}