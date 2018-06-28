import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRegistrationComponent } from './server-registration.component';

describe('ServerRegistrationComponent', () => {
  let component: ServerRegistrationComponent;
  let fixture: ComponentFixture<ServerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
