import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ProviderModule } from './providers/providers.module';

@Module({
  imports: [CatsModule,ProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
