/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SliderProductsService } from './slider-products.service';

describe('SliderProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliderProductsService]
    });
  });

  it('should ...', inject([SliderProductsService], (service: SliderProductsService) => {
    expect(service).toBeTruthy();
  }));
});
