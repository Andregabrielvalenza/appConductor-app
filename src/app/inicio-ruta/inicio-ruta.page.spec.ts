import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioRutaPage } from './inicio-ruta.page';

describe('InicioRutaPage', () => {
  let component: InicioRutaPage;
  let fixture: ComponentFixture<InicioRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRutaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
