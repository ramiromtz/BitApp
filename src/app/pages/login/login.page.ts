import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Expresión regular para validar email
  correo = '^[a-z0-9._$+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  constructor(private route: Router,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  // validar formulario
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern(this.correo)]],
    password: ['', [Validators.required]]
  });

  // Función para iniciar sesión
  entrar() {
    if (this.loginForm.valid) {
      this.showLoading().then(() => {
        this.loginService.login(this.loginForm.value).subscribe(data => {
          data == 'success' ? this.route.navigate(['/home']) : alert('Usuario o contraseña incorrecto');
        });
      });
    }
    this.loginForm.markAllAsTouched()
  }

  // Función para validar campos
  validarCampos(campo: string) {
    return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched;
  }

  // Función para mostrar alerta
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión',
      duration: 2000,
    });

    loading.present();
  }

}
