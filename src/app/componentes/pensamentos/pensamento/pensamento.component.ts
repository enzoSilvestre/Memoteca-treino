import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
// Com esse @ input mostra que esse componente vai receber informações do compoenente pai
  @Input() pensamento : IPensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor() {}

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if (this.pensamento.conteudo.length > 256) {
        return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
