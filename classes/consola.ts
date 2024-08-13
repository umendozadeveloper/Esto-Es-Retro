import { TProcesador, TFabricante, TFormato, TRelacionAspecto, TPlataformaMax, TResoluciones, IPlataforma } from "./collections";

export class Consola {
    nombre!: string;
    fabricante!: TFabricante;
    formato!: TFormato;
    pantallaPulgadas!: number;
    pantallaRelacionAspecto!: TRelacionAspecto;
    pantallaResolucion!: TResoluciones;
    bateria!: number;
    procesador!: TProcesador;
    ram!: number;
    hdmi!: boolean;
    bt!: boolean;
    wifi!: boolean;
    dobleSlot!: boolean;
    almInterno!: number;
    almExterno!: number;
    plataformaPerfectaMax!: TPlataformaMax;
    plataformasEmulables!: Array<IPlataforma>;
    plataformasEmulablesSemaforo!: any;
    joysticks!: number;
    tactil!:boolean;
    sistemaOperativoStock!:string;
    cfwCompatibles!:Array<string>;
    enlaceDeCompra1!:string;
    enlaceDeCompra2!:string;
    img!:string;
    renderIMG?:string;
}