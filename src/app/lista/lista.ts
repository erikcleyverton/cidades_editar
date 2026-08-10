import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
}

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {
  private router = inject(Router);

  
  listaPessoa = signal<Pessoa[]>([
    {
      id: 1,
      nome: 'João Silva',
      cpf: '123.456.789-00',
      dataNascimento: '1990-05-15',
      email: 'joao@email.com'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      cpf: '987.654.321-11',
      dataNascimento: '1995-10-20',
      email: 'maria@email.com'
    }
  ]);

  
  buscarPorId(elem: Pessoa): void {
    this.router.navigate(['/cadastro', elem.id]);
  }

  
  exluir(elem: Pessoa): void {
    this.listaPessoa.update(lista => lista.filter(p => p.id !== elem.id));
  }
}