import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
welcomeMessage: string;
welcomeMessageFromService: string;

  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit(){
    const name = this.route.snapshot.params.name;
    this.welcomeMessage = 'Hi ' + name + ' !!';
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
     this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }
}
