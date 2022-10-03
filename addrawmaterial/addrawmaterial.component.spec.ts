import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrawmaterialComponent } from './addrawmaterial.component';

describe('AddrawmaterialComponent', () => {
  let component: AddrawmaterialComponent;
  let fixture: ComponentFixture<AddrawmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrawmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
