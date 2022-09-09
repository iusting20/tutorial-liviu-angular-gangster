import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpongebobComponent } from './spongebob.component';

describe('SpongebobComponent', () => {
  let component: SpongebobComponent;
  let fixture: ComponentFixture<SpongebobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpongebobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpongebobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
