import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Cidade {
  idCidade: number;
  nomeCidade: string;
  numeroEleitores: number;
}

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
 
  nome_cidade: string = '';
  numero_eleitores: number | null = null;
  idEditando: number | null = null;

 
  listaCidades: Cidade[] = [];

  addItem(): void {
    if (!this.nome_cidade || !this.numero_eleitores) return;

    if (this.idEditando !== null) {

      const index = this.listaCidades.findIndex(c => c.idCidade === this.idEditando);
      if (index !== -1) {
        this.listaCidades[index] = {
          idCidade: this.idEditando,
          nomeCidade: this.nome_cidade,
          numeroEleitores: this.numero_eleitores
        };
      }
    } else {
    
      const novoItem: Cidade = {
        idCidade: this.listaCidades.length + 1,
        nomeCidade: this.nome_cidade,
        numeroEleitores: this.numero_eleitores
      };
      this.listaCidades.push(novoItem);
    }

    this.LimparItem();
  }

  editarItem(cidade: Cidade): void {
    this.idEditando = cidade.idCidade;
    this.nome_cidade = cidade.nomeCidade;
    this.numero_eleitores = cidade.numeroEleitores;
  }

  excluirItem(id: number): void {
    this.listaCidades = this.listaCidades.filter(c => c.idCidade !== id);
    if (this.idEditando === id) {
      this.LimparItem();
    }
  }

  LimparItem(): void {
    this.nome_cidade = '';
    this.numero_eleitores = null;
    this.idEditando = null;
  }
}