import { Controller, Get, Post,
          Header, Redirect, Param, Body,
          HttpCode, HttpException, HttpStatus,
          UseFilters
        } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ForbiddenException } from './exceptions/forbidden.exception';

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

  @Get('error')
  async throwError(){
    try{
      await this.catsService.findAll()
    }catch(error){
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message'
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Post('create')
  @HttpCode(202)
  @Header('Cache-Control','none')
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto){
    throw new ForbiddenException();
  }
}