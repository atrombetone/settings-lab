import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  //Proximo substituir esse array por uma chamada ao serviço (API)
  ctrls: Array<any> = [
    { name: 'isGallery', label: 'Galeria', value: false},
    { name: 'isContacts', label: 'Contatos', value: false},
    { name: 'isAccounts', label: 'Contas', value: false},
    { name: 'isNotification', label: 'Notificações', value: true}
  ];

   settingsForm = new FormGroup({ });

   constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ctrls.forEach(c => {
      const control = this.fb.control(c.value);
      this.settingsForm.addControl(control);
    });

  }

  salvar() {
    alert(JSON.stringify(this.settingsForm.value));
  }

}
