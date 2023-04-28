import { Combo } from '../main/Productos/Combo';
import { ProductoSimple } from '../main/Productos/ProductoSimple';

var moto;
var chaleco;
var casco;
var piloto;
var guante;
var unCombo: Combo;

beforeEach(() =>{
    moto = new ProductoSimple(4,"moto",100);
    chaleco = new ProductoSimple(9,"chaleco",100);
    casco = new ProductoSimple(13,"casco",100);
    piloto = new ProductoSimple(25,"piloto",100);
    guante = new ProductoSimple(6,"guante",100);

    unCombo = new Combo("Combo Loco");
    unCombo.agregarProducto(moto);
    unCombo.agregarProducto(chaleco);
    unCombo.agregarProducto(casco);
    unCombo.agregarProducto(piloto);
    unCombo.agregarProducto(guante);
}); 

test("Combo vale 500", () => {
    expect(unCombo.precio()).toBe(500);
});

test("Combo stock menor igual a 4", () => {
    expect(unCombo.precio()).toBe(500);
});