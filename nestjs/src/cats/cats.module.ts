import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Global()
@Module({
    controllers : [CatsController],
    providers: [
        CatsService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        }
    ],
    exports: [CatsService]
})
export class CatsModule {}