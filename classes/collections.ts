export type TFabricante = "Anbernic" | "Powkiddy" | "Retroid" | any;
export type TRelacionAspecto = "16:9" | "4:3" | "1:1" | "3:2" | "Otro";
export type TFormato = "Vertical" | "Horizontal" | "Flip";
export interface IPlataforma {
    nombre:string,
    clave:string,

}
export const Coleccion8y16Bits:Array<IPlataforma> = [
    { nombre: 'Nintendo', clave:'NES'},
    { nombre: 'Super Nintendo', clave:'SNES'},
    { nombre: 'GameGear', clave:'GG'},
    { nombre: 'MegaDrive', clave:'MD'}, 
    { nombre: 'GameBoy', clave:'GB'},
    { nombre: 'GameBoy Color', clave:'GBC'},
    { nombre: 'GameBoy Advance', clave:'GBA'},
    { nombre: 'CPS1', clave:'CPS1'},
    { nombre: 'CPS2', clave:'CPS2'},
    { nombre: 'CPS3', clave:'CPS3'},
    { nombre: 'NEOGEO', clave:'NEOGEO'},
    { nombre: 'MAME', clave:'MAME'},
    { nombre: 'PlayStation One', clave:'PSX'}];
export const Coleccion5ta:Array<IPlataforma>  = Coleccion8y16Bits.concat([
    { nombre: 'Nintendo 64', clave:'N64'},
    { nombre: 'DreamCast', clave:'DC'},
    { nombre: 'AtomisWave', clave:'ATOMISWAVE'},
    { nombre: 'Naomi', clave:'NAOMI'}, 
    { nombre: 'Sega Saturn', clave:'SS'},
    { nombre: 'PlayStation Portable', clave:'PSP'}]);

export const ColeccionFull:Array<IPlataforma> = Coleccion5ta.concat([
    { nombre: 'GameCube', clave:'GC'},
    { nombre: 'PlayStation 2', clave:'PS2'},
    { nombre: 'Wii', clave:'WII'},
    { nombre: 'Nintendo Switch', clave:'SWITCH'}]);

export type TProcesador = 'H700' | 'RK3326' | 'RK3566' | 'T820' | 'T618' | 'T610' | 'T310' | 'MTK D 1100' | 'Snapdragon 8 Gen2' | 'ARM9' | 'A311D';
export type TPlataformaMax = 'GameBoy Advance' | 'PlayStation 1' | 'PS1 / NDS' | 'N64 / DC' | 'PSP/N64/DC' | 'GC';

export type TResoluciones = '640x480' | '1280x720' | '1080x1920' | '720x720' | '960x544' | '480x320' | '320x240' | '854x480';




//export type 