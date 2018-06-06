import { Component, OnInit } from '@angular/core';
import { User} from '../User';
import { ActivatedRoute, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from "rxjs/operators";
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User;
  addForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    
  ) { 
    this.user = new User();
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required]
    });
  }

  onSubmit(){
    this.userService.addUser(this.addForm.value)
    .subscribe( user => {
      this.router.navigate(['user/add']);
    });

  }

}
