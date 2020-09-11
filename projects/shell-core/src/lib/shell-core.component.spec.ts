import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellCoreComponent } from './shell-core.component';

describe('ShellCoreComponent', () => {
  let component: ShellCoreComponent;
  let fixture: ComponentFixture<ShellCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
