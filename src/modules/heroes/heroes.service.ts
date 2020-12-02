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

    async getAll(): Promise<Heroes[]> {
        return await this.heroeModel.find().exec();
    }

    async getById(idRegistro: string): Promise<Heroes> {
        return await this.heroeModel.findById(idRegistro).exec()
    }

    async getOne(campo, valor): Promise<Heroes> {
        let obj = {}
        obj[campo] = valor
        return await this.heroeModel.findOne( obj ).exec();
    }
}
