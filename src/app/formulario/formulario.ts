import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Pessoa {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  id: number | null = null;
  nome: string = '';

  listaPessoa: Pessoa[] = [];

  addItem(): void {
    if (!this.nome) return;

    if (this.id !== null) {
      const index = this.listaPessoa.findIndex(p => p.id === this.id);
      if (index !== -1) {
        this.listaPessoa[index] = { id: this.id, nome: this.nome };
      }
    } else {
      const novoItem: Pessoa = {
        id: this.listaPessoa.length + 1,
        nome: this.nome
      };
      this.listaPessoa.push(novoItem);
    }

    this.LimparItem();
  }

  editarItem(pessoa: Pessoa): void {
    this.id = pessoa.id;
    this.nome = pessoa.nome;
  }

  excluirItem(id: number): void {
    this.listaPessoa = this.listaPessoa.filter(p => p.id !== id);
    if (this.id === id) {
      this.LimparItem();
    }
  }

  LimparItem(): void {
    this.nome = '';
    this.id = null;
  }
}