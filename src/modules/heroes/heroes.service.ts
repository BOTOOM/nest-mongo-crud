import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHeroeDto } from './dto/create-heroe.dto';
import { Heroes } from './schemas/heroe.schema';

@Injectable()
export class HeroesService {
    constructor(@InjectModel(Heroes.name) private readonly heroeModel: Model<Heroes>) {}

    async post(createHeroeDto: CreateHeroeDto): Promise<Heroes> {
        const createdRubro = new this.heroeModel(createHeroeDto);
        return createdRubro.save();
    }

    async findAll(): Promise<Heroes[]> {
        return this.heroeModel.find().exec();
      }
}
