import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseComponent } from './revise.component';

describe('ReviseComponent', () => {
  let component: ReviseComponent;
  let fixture: ComponentFixture<ReviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
