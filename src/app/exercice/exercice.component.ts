import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  secretsShown: boolean = false;
  logs: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchSecretShown() {
    this.secretsShown = !this.secretsShown;
    this.logs.push(new Date());
    console.log(this.logs)
  }

}
