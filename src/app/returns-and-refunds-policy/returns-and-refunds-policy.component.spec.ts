import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsAndRefundsPolicyComponent } from './returns-and-refunds-policy.component';

describe('ReturnsAndRefundsPolicyComponent', () => {
  let component: ReturnsAndRefundsPolicyComponent;
  let fixture: ComponentFixture<ReturnsAndRefundsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsAndRefundsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsAndRefundsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
