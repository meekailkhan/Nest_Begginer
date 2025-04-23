import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ProviderModule } from './providers/providers.module';
import { LoggerMiddleware } from './comman/middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ProductModule } from './product/product.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [CatsModule,ProviderModule,ProductModule,JobsModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide : APP_FILTER,
    //   useClass : HttpExceptionFilter
    // }
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({path :'cats', method : RequestMethod.GET},{path : 'provider', method : RequestMethod.POST})
  }
}
