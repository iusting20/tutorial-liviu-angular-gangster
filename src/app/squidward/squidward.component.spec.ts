import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquidwardComponent } from './squidward.component';

describe('SquidwardComponent', () => {
  let component: SquidwardComponent;
  let fixture: ComponentFixture<SquidwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquidwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquidwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
