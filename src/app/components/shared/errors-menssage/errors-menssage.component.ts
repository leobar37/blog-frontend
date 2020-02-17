import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-errors-menssage',
  templateUrl: './errors-menssage.component.html',
  styleUrls: ['./errors-menssage.component.scss']
})
export class ErrorsMenssageComponent implements OnInit {
  @Input() data;
  @Input() nombre; 
  @Input() activeMessage; 

  constructor() { }

  ngOnInit() {
  }

}
