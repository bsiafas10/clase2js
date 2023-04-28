import { Producto } from "./Producto";

export class Combo extends Producto{
    private productos: Array<Producto>;

    constructor (descripcion :string){
        super(descripcion);
        this.productos = [];
    }

    public agregarProducto(producto: Producto){
        this.productos.push(producto)
    }

    
    public precio(): number {
        var precioTotal = 0;
        this.productos.forEach(p => precioTotal += p.precio());
        return precioTotal;

        //return this.productos.reduce((precioTotal,producto)=> precioTotal + producto.precio(),0);
    }
    public stock(): number {
        var comboMinimo = Number.MAX_VALUE;
        for (var i = 0; i< this.productos.length;i++){
            if (this.productos[i].stock() < comboMinimo){
                comboMinimo = this.productos[i].stock();
            }
        }
        return comboMinimo;
        
        //return this.productos.reduce((p1,p2) => p1.stock() < p2.stock() ? p1 : p2).stock();
    }
}