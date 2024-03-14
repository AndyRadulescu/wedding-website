import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalItemComponent } from './additional-item.component';

describe('AditionalItemComponent', () => {
  let component: AdditionalItemComponent;
  let fixture: ComponentFixture<AdditionalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
