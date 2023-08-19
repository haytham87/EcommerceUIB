import { TestBed } from '@angular/core/testing';

import { SerBasketService } from './ser-basket.service';

describe('SerBasketService', () => {
  let service: SerBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
