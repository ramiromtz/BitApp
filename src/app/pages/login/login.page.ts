import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Expresión regular para validar email
  correo = '^[a-z0-9._$+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  constructor(private route: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  // validar formulario
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.correo)]],
    password: ['', [Validators.required]]
  });

  entrar() {
    this.route.navigate(['/tabs/tab1'])
  }

  validarCampos(campo: string) {
    return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched;
  }

}
