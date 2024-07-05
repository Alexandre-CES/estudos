import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

import { logger} from './logger.middleware';

import { HttpExceptionFilter } from './cats/exceptions/http-exception.filter';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

import { ValidationPipe } from './cats/pipes/validation.pipe';

//annotation
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
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