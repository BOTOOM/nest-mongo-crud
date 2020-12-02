import { Controller, Post, Get, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateHeroeDto } from './dto/create-heroe.dto';


@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {
    constructor( private readonly heroesService: HeroesService ) {

    }

    @Get('GetAll')
    getAll() {
        return this.heroesService.getAll()
    }

    @Get('GetById:idRegistro')
    getById( @Param('idRegistro') id: string ) {
        return this.heroesService.getById(id)
    }

    @Get('GetOne')
    getOne( @Query('Campo') Campo: string,@Query('Valor') Valor: string, ) {
        return this.heroesService.getOne(Campo,Valor)
    }

    // @ApiBody({ type: CreateHeroeDto })
    @Post()
    post(@Body() CreateHeroeDto: CreateHeroeDto) {
        return this.heroesService.post(CreateHeroeDto)
    }

    @Put(':idRegistro')
    put( @Param('idRegistro') id: string, @Body() updateHeroeDto: CreateHeroeDto ) {
        return this.heroesService.update(id,updateHeroeDto)
    }

    @Delete(':idRegistro')
    delete( @Param('idRegistro') id: string,  ) {
    }

}
