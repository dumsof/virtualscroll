import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    /* se obtiene la lista de paises, de un servicio libre */
    this.http.get(`https://restcountries.eu/rest/v2/lang/es`)
      .subscribe(paises => {
        this.paises = paises;
      });
  }
  /* arrastrar y que los elementos se acondicionen a una posición */
  drop(evento: CdkDragDrop<any>) {
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
