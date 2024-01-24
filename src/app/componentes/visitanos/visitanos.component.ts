import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitanos',
  templateUrl: './visitanos.component.html',
  styleUrls: ['./visitanos.component.css']
})
export class VisitanosComponent {
  private reuniones = 'assets/Archivos/reuniones.json';

  protected info = []
  constructor(private http:HttpClient){
  }

  ngOnInit(){

    this.getJson(this.reuniones).subscribe(lista => {
      this.info = lista;
    });
    
  }

  getJson(x:string):Observable<any>{
    return this.http.get<any>(x);
  }

}
