import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  ctrls: Array<any> = [
    {
      name: 'isGallery',
      label: 'Galeria',
      value: false
    },
    {
      name: 'isContacts',
      label: 'Contatos',
      value: false
    },
    {
      name: 'isAccounts',
      label: 'Contas',
      value: false
    },
    {
      name: 'isNotification',
      label: 'Notificações',
      value: true
    }
  ];

   public settingsForm: FormGroup = new FormGroup({});

   constructor(private fb: FormBuilder) {
     this.ctrls.forEach(item => {
       this.settingsForm.addControl(item.name, new FormControl(item.value));
     });
   }

  ngOnInit() {  }

  salvar() {
    alert(JSON.stringify(this.settingsForm.value));
  }

}
