import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { ApiBody, ApiConsumes, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateHeroeDto } from './dto/create-heroe.dto';


@ApiTags('heroes')
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

    // @ApiBody({ type: CreateHeroeDto })
    @Post()
    post(@Body() CreateHeroeDto: CreateHeroeDto) {
        return this.heroesService.post(CreateHeroeDto)
    }

    @Put(':idRegistro')
    put( @Param('idRegistro') id: string, @Body() datos: any ) {
    }

    @Delete(':idRegistro')
    delete( @Param('idRegistro') id: string ) {
    }

}
