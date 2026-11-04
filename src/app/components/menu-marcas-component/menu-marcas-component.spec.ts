import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuMarcasComponent } from './menu-marcas-component';

describe('MenuMarcasComponent', () => {
  let component: MenuMarcasComponent;
  let fixture: ComponentFixture<MenuMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMarcasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMarcasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
