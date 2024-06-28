import { Controller, Get, Post, HttpCode, Header, Redirect, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController{

  @Get()
  @Redirect('https://nestjs.com', 301)
  home(){}

  @Get('/id/:id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }

  @Get('breed')
  async findAll(): Promise<any[]> {
    return ['This promisse returns all the cats'];
  }

  @Get('ab*cd')
  wildGet(){
    return 'this routes uses a wildcard';
  }

  

  @Post('create')
  @HttpCode(202)
  @Header('Cache-Control','none')
  async create(@Body() createCatDto: CreateCatDto){
    createCatDto.name = 'name';
    createCatDto.age = 1;
    createCatDto.breed = 'cat';
    return `this action creates a cat:
      name:${createCatDto.name}
      age:${createCatDto.age}
      breed:${createCatDto.breed}
    `;
  }
  
}