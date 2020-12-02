import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './modules/heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/nest_prueba'),
     HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
