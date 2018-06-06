import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {

  user: User;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.user = new User();

  }

  ngOnInit() {
      this.getUser();  
  }
    

    getUser():void{
      this.route.params.subscribe((params) => {
        let id = params.id;
        this.user.id = id;
        this.userService.getUser(id).subscribe(user => this.user = user);
        
      });
      
    }
}
