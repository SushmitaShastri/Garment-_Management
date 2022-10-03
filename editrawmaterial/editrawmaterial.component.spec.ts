import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrawmaterialComponent } from './editrawmaterial.component';

describe('EditrawmaterialComponent', () => {
  let component: EditrawmaterialComponent;
  let fixture: ComponentFixture<EditrawmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrawmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
