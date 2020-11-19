import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  
  type: string;

  constructor(
    private activateRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(routeParam => { 
      //  ใช้ component ได้ทุก tpye
      //console.log(routeParam.id)
      this.type = routeParam.type
    })
  }
}