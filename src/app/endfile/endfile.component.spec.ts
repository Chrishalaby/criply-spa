import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndfileComponent } from './endfile.component';

describe('EndfileComponent', () => {
  let component: EndfileComponent;
  let fixture: ComponentFixture<EndfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
