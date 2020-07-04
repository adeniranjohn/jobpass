import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiostatusComponent } from './biostatus.component';

describe('BiostatusComponent', () => {
  let component: BiostatusComponent;
  let fixture: ComponentFixture<BiostatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiostatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiostatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
