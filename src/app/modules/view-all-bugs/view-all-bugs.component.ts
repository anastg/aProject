import { Component, OnInit } from '@angular/core';
import { BugService} from 'src/app/service/bug.service';
import {bug} from "../../shared/bug";
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-all-bugs',
  templateUrl: './view-all-bugs.component.html',
  styleUrls: ['./view-all-bugs.component.scss']
})
export class ViewAllBugsComponent implements OnInit {
  
  bugs! : bug[];

  constructor() {}

  ngOnInit(): void {

  }

}
