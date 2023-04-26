import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoonmlistComponent } from './roonmlist.component';

describe('RoonmlistComponent', () => {
  let component: RoonmlistComponent;
  let fixture: ComponentFixture<RoonmlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoonmlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoonmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
