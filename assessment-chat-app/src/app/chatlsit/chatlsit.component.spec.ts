import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlsitComponent } from './chatlsit.component';

describe('ChatlsitComponent', () => {
  let component: ChatlsitComponent;
  let fixture: ComponentFixture<ChatlsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatlsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
