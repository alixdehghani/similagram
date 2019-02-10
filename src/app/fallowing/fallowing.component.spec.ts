import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallowingComponent } from './fallowing.component';

describe('FallowingComponent', () => {
  let component: FallowingComponent;
  let fixture: ComponentFixture<FallowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
