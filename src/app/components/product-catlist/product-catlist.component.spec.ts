import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatlistComponent } from './product-catlist.component';

describe('ProductCatlistComponent', () => {
  let component: ProductCatlistComponent;
  let fixture: ComponentFixture<ProductCatlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatlistComponent]
    });
    fixture = TestBed.createComponent(ProductCatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
