import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { Heroes, HeroesSchema } from './schemas/heroe.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Heroes.name, schema: HeroesSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService]
})
export class HeroesModule {}
