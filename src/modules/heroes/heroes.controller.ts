import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
    constructor( private readonly heroesService: HeroesService ) {

    }

    @Get('GetAll')
    getAll() {
    }

    @Get(':idRegistro')
    getOne( @Param('idRegistro') id: string ) {
    }

    @Post()
    post(@Body() datosHeroe: any) {
        return this.heroesService.post(datosHeroe)
    }

    @Put(':idRegistro')
    put( @Param('idRegistro') id: string, @Body() datos: any ) {
    }

    @Delete(':idRegistro')
    delete( @Param('idRegistro') id: string ) {
    }

}
