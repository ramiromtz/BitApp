import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    // obtener el id del alumno mediante la url
    let id = this.actRoute.snapshot.paramMap.get('id');
  }

}
  