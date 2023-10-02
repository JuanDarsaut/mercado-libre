import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsItemComponent } from './specs-item.component';

describe('SpecsItemComponent', () => {
  let component: SpecsItemComponent;
  let fixture: ComponentFixture<SpecsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
