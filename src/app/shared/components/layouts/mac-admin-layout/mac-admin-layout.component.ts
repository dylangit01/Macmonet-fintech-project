import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../services/navigation.service";
import {SearchService} from "../../../services/search.service";
import {ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";

@Component({
  selector: 'app-mac-admin-layout',
  templateUrl: './mac-admin-layout.component.html',
  styleUrls: ['./mac-admin-layout.component.scss']
})
export class MacAdminLayoutComponent implements OnInit {
  moduleLoading: boolean;

  constructor(
    public navService: NavigationService,
    public searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.moduleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.moduleLoading = false;
      }
    });
  }

}
