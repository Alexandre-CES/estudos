import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

import { logger} from './logger.middleware';

import { HttpExceptionFilter } from './cats/exceptions/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

//annotation
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'cats/(.*)', method: RequestMethod.GET }
      )
      .forRoutes({path:'cats/*', method: RequestMethod.ALL});
  }
}