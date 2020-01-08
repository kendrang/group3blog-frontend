import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SftexteditortemplateComponent } from './sftexteditortemplate.component';

describe('SftexteditortemplateComponent', () => {
  let component: SftexteditortemplateComponent;
  let fixture: ComponentFixture<SftexteditortemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SftexteditortemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SftexteditortemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
