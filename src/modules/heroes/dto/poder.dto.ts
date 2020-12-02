import { ApiProperty } from '@nestjs/swagger';

export class PoderDto {
    @ApiProperty()
    readonly mortal: boolean;
    @ApiProperty()
    readonly nombre: string;
    @ApiProperty()
    readonly descripcion: string;
    @ApiProperty()
    readonly activo: boolean;
}