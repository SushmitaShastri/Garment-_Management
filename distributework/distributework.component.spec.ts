import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeworkComponent } from './distributework.component';

describe('DistributeworkComponent', () => {
  let component: DistributeworkComponent;
  let fixture: ComponentFixture<DistributeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
