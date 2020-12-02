import { ApiProperty } from '@nestjs/swagger';


export class CasaDto {
    @ApiProperty()
    readonly nombre: string;
    @ApiProperty()
    readonly descripcion: string;
    @ApiProperty()
    readonly activo: boolean;
}