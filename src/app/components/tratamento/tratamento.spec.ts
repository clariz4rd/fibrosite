import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tratamento } from './tratamento';

describe('Tratamento', () => {
  let component: Tratamento;
  let fixture: ComponentFixture<Tratamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tratamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tratamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
