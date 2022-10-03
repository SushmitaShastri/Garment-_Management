import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistributeworkComponent } from './adddistributework.component';

describe('AdddistributeworkComponent', () => {
  let component: AdddistributeworkComponent;
  let fixture: ComponentFixture<AdddistributeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddistributeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddistributeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
