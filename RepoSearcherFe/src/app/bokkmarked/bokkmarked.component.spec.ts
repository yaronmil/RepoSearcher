import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokkmarkedComponent } from './bokkmarked.component';

describe('BokkmarkedComponent', () => {
  let component: BokkmarkedComponent;
  let fixture: ComponentFixture<BokkmarkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokkmarkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokkmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
