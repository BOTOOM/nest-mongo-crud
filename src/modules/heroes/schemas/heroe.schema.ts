import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'heroes' })
export class Heroes extends Document {
    @Prop()
    _id: String

    @Prop(raw({
        nombre: { type: String },
        descripcion: { type: String },
        fechaCreacion: { type: Date, default:  new Date()},
        activo: { type: Boolean },
      }))
      casa: Record<string, any>;
    @Prop(raw({
      mortal: { type: Number, },
      nombre: { type: String },
      descripcion: { type: String },
      fechaCreacion: { type: Date, default:  new Date()},
      activo: { type: Boolean },
    }))
    poder: Record<string, any>[];
    
    @Prop()
    Nombre: String

    @Prop()
    Peliculas: String[]

    @Prop()
    vivo: boolean

    @Prop()
    dinero: number

    @Prop( {default: new Date()} )
    fecha_creacion: Date;
}

export const HeroesSchema = SchemaFactory.createForClass(Heroes);
