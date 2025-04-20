import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ProviderModule } from './providers/providers.module';
import { LoggerMiddleware } from './comman/middleware/logger.middleware';

@Module({
  imports: [CatsModule,ProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({path :'cats', method : RequestMethod.GET},{path : 'provider', method : RequestMethod.POST})
  }
}
