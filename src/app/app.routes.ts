import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Lista } from './lista/lista';
import { HomeComponent } from './home-component/home-component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: Formulario },
  { path: 'cadastro/:id', component: Formulario }, 
  { path: 'lista', component: Lista }
];