import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

   ctrls: [
     { name: 'isGallery', value: false},
     { name: 'isContacts', value: false},
     { name: 'isAccounts', value: false},
     { name: 'isNotification', value: false}
   ];
  constructor() { }

  ngOnInit() {
  }

  salvar() {

  }

}
