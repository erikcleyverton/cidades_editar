import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  tamanhoArray(): number {
    return this.pessoas.length;
  }

  adicionar(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }

  listar(): Pessoa[] {
    return this.pessoas;
  }

  buscarPorId(id: number): Observable<Pessoa | undefined> {
    const pessoa = this.pessoas.find(elem => elem.id === id);
    return of(pessoa);
  }

  editar(pessoa: Pessoa): void {
    const posArray = this.pessoas.findIndex(elem => elem.id === pessoa.id);
    if (posArray !== -1) {
      this.pessoas[posArray] = pessoa;
    }
  }

  excluir(id: number): void {
    this.pessoas = this.pessoas.filter(elem => elem.id !== id);
  }
}