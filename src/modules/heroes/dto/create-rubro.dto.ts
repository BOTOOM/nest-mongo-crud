export class CreateHeroeDto {
    readonly _id: string;
    readonly casa: {
        nombre: string,
        descripcion: string,
        activo: boolean
    };
    readonly poder: [{
        mortal: boolean,
        nombre: string,
        descripcion: string,
        activo: boolean
    }];
    readonly Peliculas: string[];
    readonly Nombre: string;
    readonly vivo: boolean;
    readonly dinero: number;
  }