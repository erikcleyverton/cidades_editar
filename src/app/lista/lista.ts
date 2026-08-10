import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface Pessoa {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class ListaComponent {
  private router = inject(Router);

  listaPessoa = signal<Pessoa[]>([
    { id: 1, nome: 'Pessoa Exemplo 1' },
    { id: 2, nome: 'Pessoa Exemplo 2' }
  ]);

  buscarPorId(elem: Pessoa): void {
    this.router.navigate(['/cadastro', elem.id]);
  }

  exluir(elem: Pessoa): void {
    this.listaPessoa.update(lista => lista.filter(p => p.id !== elem.id));
  }
}