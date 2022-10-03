import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdistributeworkComponent } from './editdistributework.component';

describe('EditdistributeworkComponent', () => {
  let component: EditdistributeworkComponent;
  let fixture: ComponentFixture<EditdistributeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdistributeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdistributeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
