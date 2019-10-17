import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  settingsForm = new FormGroup({
    isGallery: new FormControl(false),
    isContacts: new FormControl(false),
    isAccounts: new FormControl(false),
    isNotification: new FormControl(true)
  });

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    alert(JSON.stringify(this.settingsForm.value));
  }

}
