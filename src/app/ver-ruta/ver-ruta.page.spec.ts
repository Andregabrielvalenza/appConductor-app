import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerRutaPage } from './ver-ruta.page';

describe('VerRutaPage', () => {
  let component: VerRutaPage;
  let fixture: ComponentFixture<VerRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRutaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
