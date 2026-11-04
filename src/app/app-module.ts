import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { MenuMarcasComponent } from './components/menu-marcas-component/menu-marcas-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegistroComponent } from './components/registro-component/registro-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { RealizarComprasComponent } from './components/realizar-compras-component/realizar-compras-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CuboComponent,
    MenuMarcasComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ComprasComponent,
    RealizarComprasComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
