import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './modules/heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@${process.env.HOST_MONGO}:27017/${process.env.DB_MONGO}?authSource=admin`, { useFindAndModify: false }),
     HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
