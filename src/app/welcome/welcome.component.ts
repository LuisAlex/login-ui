import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
welcomeMessage = ', you are authenticated!!';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const name = this.route.snapshot.params.name;
    this.welcomeMessage = name + this.welcomeMessage;
  }

}
