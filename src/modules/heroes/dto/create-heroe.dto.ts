import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroeDto {
    @ApiProperty()
    readonly _id: string;
    @ApiProperty()
    readonly casa: {
        nombre: string,
        descripcion: string,
        activo: boolean
    };
    @ApiProperty()
    readonly poder: [{
        mortal: boolean,
        nombre: string,
        descripcion: string,
        activo: boolean
    }];
    @ApiProperty()
    readonly Peliculas: string[];
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly vivo: boolean;
    @ApiProperty()
    readonly dinero: number;
  }