import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit {
  nome_cidade = '';
  numero_eleitores: number | null = null;
  idPessoaEdit = 0;
  edit = false;

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) { }

  limpaAtributos() {
    this.nome_cidade = '';
    this.numero_eleitores = null;
    this.idPessoaEdit = 0;
    this.edit = false;
  }

  carregaAtributos(pessoa: Pessoa) {
    this.nome_cidade = pessoa.nome_cidade || '';
    this.numero_eleitores = pessoa.numero_eleitores ?? null;
  }

  ngOnInit() {
    const idPessoa = this.route.snapshot.paramMap.get('id');

    this.idPessoaEdit = Number(idPessoa);

    if (idPessoa) {
      this.edit = true;

      this.pessoaService.buscarPorId(Number(idPessoa))
        .subscribe((objPessoa: Pessoa | undefined) => {
          if (objPessoa) {
            this.carregaAtributos({ ...objPessoa });
          }
        });
    }
  }

  save() {
    const pessoa: Pessoa = {
      nome_cidade: this.nome_cidade,
      numero_eleitores: this.numero_eleitores
    };

    if (this.edit) {
      pessoa.id = this.idPessoaEdit;
      this.pessoaService.editar(pessoa);
      this.edit = false;
    } else {
      pessoa.id = this.pessoaService.tamanhoArray() + 1;
      this.pessoaService.adicionar(pessoa);
    }

    this.limpaAtributos();
  }

  listaCidades() {
    return this.pessoaService.listar();
  }

  excluirItem(id?: number) {
    if (id !== undefined) {
      this.pessoaService.excluir(id);
    }
  }

  editarItem(pessoa: Pessoa) {
    if (pessoa.id) {
      this.idPessoaEdit = pessoa.id;
      this.edit = true;
      this.carregaAtributos(pessoa);
    }
  }
}