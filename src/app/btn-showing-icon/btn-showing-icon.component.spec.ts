import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnShowingIconComponent } from './btn-showing-icon.component';

describe('BtnShowingIconComponent', () => {
  let component: BtnShowingIconComponent;
  let fixture: ComponentFixture<BtnShowingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnShowingIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnShowingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
