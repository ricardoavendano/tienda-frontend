import { Libro } from '../libro/libro';

export class Carrito{
    idCompra: number;
    valorCompra: number;
    estado: string;
    cantidadComprada: number;
    idUsuario: string;
    compraList: Libro[];
}