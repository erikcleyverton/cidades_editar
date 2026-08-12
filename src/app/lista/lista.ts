import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  constructor(private router: Router, private pessoaService: PessoaService) { }

  listaPessoa() {
    return this.pessoaService.listar();
  }

  exluir(pObjPessoa: Pessoa) {
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {
      if (pObjPessoa.id !== undefined) {
        this.pessoaService.excluir(Number(pObjPessoa.id));
      }
    }
  }

  buscarPorId(pObjPessoa: Pessoa) {
    this.router.navigate(['/cadastro', pObjPessoa.id]);
  }
}