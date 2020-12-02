import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor() {

    }

    @Get('GetAll')
    getAll() {
    }

    @Get(':idRegistro')
    getOne( @Param('idRegistro') id: string ) {
    }

    @Post()
    post(@Body() datos: any) {
    }

    @Put(':idRegistro')
    put( @Param('idRegistro') id: string, @Body() datos: any ) {
    }

    @Delete(':idRegistro')
    delete( @Param('idRegistro') id: string ) {
    }

}
