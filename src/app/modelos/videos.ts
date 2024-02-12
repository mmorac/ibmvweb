export class video{
    titulo:string = "";
    url:string = "";
    fecha:string = "";

    constructor(_titulo:string, _url:string, _fecha:string){
        this.titulo = _titulo;
        this.url = _url;
        this.fecha = _fecha;
    }
}