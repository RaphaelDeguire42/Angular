import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBiereComponent } from './ajout-biere.component';

describe('AjoutBiereComponent', () => {
  let component: AjoutBiereComponent;
  let fixture: ComponentFixture<AjoutBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
