import { ApiProperty } from '@nestjs/swagger';
import { CasaDto } from './casa.dto';
import { PoderDto } from './poder.dto';

export class CreateHeroeDto {
    // @ApiProperty()
    // readonly _id: string;
    @ApiProperty()
    readonly casa: CasaDto;
    @ApiProperty({ type: PoderDto, isArray: true } )
    readonly poder: PoderDto[];
    @ApiProperty()
    readonly Peliculas: string[];
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly vivo: boolean;
    @ApiProperty()
    readonly dinero: number;
  }

//   export class CreateHeroeDto {
//     @ApiProperty()
//     readonly _id: string;
//     @ApiProperty()
//     readonly casa: {
//         nombre: string,
//         descripcion: string,
//         activo: boolean
//     };
//     @ApiProperty()
//     readonly poder: [{
//         mortal: boolean,
//         nombre: string,
//         descripcion: string,
//         activo: boolean
//     }];
//     @ApiProperty()
//     readonly Peliculas: string[];
//     @ApiProperty()
//     readonly Nombre: string;
//     @ApiProperty()
//     readonly vivo: boolean;
//     @ApiProperty()
//     readonly dinero: number;
//   }