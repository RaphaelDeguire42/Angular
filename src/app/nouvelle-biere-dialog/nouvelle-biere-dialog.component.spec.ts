import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleBiereDialogComponent } from './nouvelle-biere-dialog.component';

describe('NouvelleBiereDialogComponent', () => {
  let component: NouvelleBiereDialogComponent;
  let fixture: ComponentFixture<NouvelleBiereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleBiereDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleBiereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
