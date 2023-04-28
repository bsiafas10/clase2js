import { Producto } from "./Producto";

export class ProductoSimple extends Producto{
    private stockP: number;
    private precioP : number;

    public constructor (stock : number, descripcion : string, precio : number){
        super(descripcion);
        this.stockP = stock;
        this.precioP = precio;
    }

    public precio(): number {
        return this.precioP;
    }

    public stock(): number {
        return this.stockP;
    }
}