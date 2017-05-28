import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/of";
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
// import slider product item model
import { SliderProduct } from '../models/slider-product';

@Injectable()
export class SliderProductsService {


  private subject: Subject<SliderProduct[]> = new Subject<SliderProduct[]>();
  private sliders: SliderProduct[];

  constructor(private http: Http) { }

  getProducts(): Observable<SliderProduct[]> {

      this.http.get("http://localhost:4200/assets/data/slider-products.json").subscribe((response: Response) => {
        this.sliders = response.json();
        this.subject.next(this.sliders);
        console.log(this.sliders);
      });

    return this.subject.asObservable();
  }
}
