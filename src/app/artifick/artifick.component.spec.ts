import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifickComponent } from './artifick.component';

describe('ArtifickComponent', () => {
  let component: ArtifickComponent;
  let fixture: ComponentFixture<ArtifickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
