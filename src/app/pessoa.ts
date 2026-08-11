import { Injectable, signal } from '@angular/core';

export interface Cidade {
  idCidade: number;
  nomeCidade: string;
  numeroEleitores: number;
}

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  listaCidades = signal<Cidade[]>([
    { idCidade: 1, nomeCidade: 'Aracaju', numeroEleitores: 500000 },
    { idCidade: 2, nomeCidade: 'Salvador', numeroEleitores: 1800000 }
  ]);

  adicionarOuAtualizar(cidade: { idCidade?: number | null; nomeCidade: string; numeroEleitores: number }): void {
    if (cidade.idCidade !== null && cidade.idCidade !== undefined) {
      // Atualiza cidade existente
      this.listaCidades.update(lista =>
        lista.map(c => c.idCidade === cidade.idCidade ? { ...c, nomeCidade: cidade.nomeCidade, numeroEleitores: cidade.numeroEleitores } : c)
      );
    } else {
      // Adiciona nova cidade
      const novaCidade: Cidade = {
        idCidade: this.listaCidades().length > 0 ? Math.max(...this.listaCidades().map(c => c.idCidade)) + 1 : 1,
        nomeCidade: cidade.nomeCidade,
        numeroEleitores: cidade.numeroEleitores
      };
      this.listaCidades.update(lista => [...lista, novaCidade]);
    }
  }

  excluirCidade(id: number): void {
    this.listaCidades.update(lista => lista.filter(c => c.idCidade !== id));
  }
}