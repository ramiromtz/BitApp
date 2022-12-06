import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  // Expresión regular para validar email
  correo = '^[a-z0-9._$+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  constructor(private fb: FormBuilder,
              private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  addUserForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    matricula: ['', [Validators.required]],
    carrera: ['', [Validators.required]],
    grupo: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.pattern(this.correo)]],
    password: ['', [Validators.required]]
  });

  addUser(body: any) {
    this.loginService.addUser(body.value).subscribe((res: any) => {
      this.addUserForm.reset();
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario agregado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
