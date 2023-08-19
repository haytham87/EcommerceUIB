import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrddetailsComponent } from './prddetails.component';

describe('PrddetailsComponent', () => {
  let component: PrddetailsComponent;
  let fixture: ComponentFixture<PrddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
