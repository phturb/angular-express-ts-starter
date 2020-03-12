import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointDemoComponent } from './endpoint-demo.component';

describe('EndpointDemoComponent', () => {
  let component: EndpointDemoComponent;
  let fixture: ComponentFixture<EndpointDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
