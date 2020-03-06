import {Component, OnInit} from '@angular/core';
import {SharedAnimations} from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  animations: [SharedAnimations]
})
export class AccordionsComponent implements OnInit {
  code = `
<ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
  <ngb-panel title="Simple">
    <ng-template ngbPanelContent>
     This is for Brokerage dashboard. 
    </ng-template>
  </ngb-panel>
  <ngb-panel>
    <ng-template ngbPanelTitle>
      <span>&#9733; <b>Fancy</b> title &#9733;</span>
    </ng-template>
    <ng-template ngbPanelContent>
      This is for Lender dashboard. 
    </ng-template>
  </ngb-panel>
  <ngb-panel title="Disabled" [disabled]="true">
    <ng-template ngbPanelContent>
     This is for Borrower dashboard. 
    </ng-template>
  </ngb-panel>
</ngb-accordion>`;

  constructor() {
  }

  ngOnInit() {
  }

}
