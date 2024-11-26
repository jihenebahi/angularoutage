import { Component } from '@angular/core';
import {CATS} from "../mock-cats";
import {Cat} from '../cat';
import * as _ from 'lodash';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats = CATS;
  showDetails: boolean=false;
  /*selectedCat!: Cat;
  getCatById(id : number) {
    let index = _.findIndex (this.cats, (c: Cat) => {
      return c.id === id
    });
    /*this.selectedCat =this.selectedCat;
    console.log(this.selectedCat);
  
  }*/
  

}
