import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureVisionComponent } from './future-vision.component';

describe('FutureVisionComponent', () => {
  let component: FutureVisionComponent;
  let fixture: ComponentFixture<FutureVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
