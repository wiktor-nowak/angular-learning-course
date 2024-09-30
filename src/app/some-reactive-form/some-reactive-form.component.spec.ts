import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeReactiveFormComponent } from './some-reactive-form.component';

describe('SomeReactiveFormComponent', () => {
  let component: SomeReactiveFormComponent;
  let fixture: ComponentFixture<SomeReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
