import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';

//annotation
@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}