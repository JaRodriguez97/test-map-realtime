import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliMapComponent } from './cali-map.component';

describe('CaliMapComponent', () => {
  let component: CaliMapComponent;
  let fixture: ComponentFixture<CaliMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaliMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
