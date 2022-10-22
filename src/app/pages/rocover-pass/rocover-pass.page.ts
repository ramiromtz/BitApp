import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocover-pass',
  templateUrl: './rocover-pass.page.html',
  styleUrls: ['./rocover-pass.page.scss'],
})
export class RocoverPassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send() {
    alert("Hemos enviado un código a tu correo para recuperar tu contraseña");
  }

}
