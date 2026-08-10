import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Formulario } from './formulario/formulario';
import { Lista } from './lista/lista';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: Formulario },
  { path: 'cadastro/:id', component: Formulario },
  { path: 'lista', component: Lista }
];