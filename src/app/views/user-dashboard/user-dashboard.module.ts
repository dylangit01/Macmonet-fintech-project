import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApplicationsComponent} from './applications/applications.component';
import {ApplicantComponent} from './applicant/applicant.component';
import {LoanOptionComponent} from './loan-option/loan-option.component';
import {CreditScoreComponent} from './credit-score/credit-score.component';
import {DocumentsComponent} from './documents/documents.component';
import {LenderProfileComponent} from './lender-profile/lender-profile.component';
import {BorrowerProfileComponent} from './borrower-profile/borrower-profile.component';
import {SubjectPropertyComponent} from './subject-property/subject-property.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxEchartsModule} from "ngx-echarts";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {SharedDirectivesModule} from "../../shared/directives/shared-directives.module";
import {LaddaModule} from "angular2-ladda";
import {UserDashboardRoutingModule} from "./user-dashboard-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationsComponent,
    ApplicantComponent,
    LoanOptionComponent,
    CreditScoreComponent,
    DocumentsComponent,
    LenderProfileComponent,
    BorrowerProfileComponent,
    SubjectPropertyComponent,
    MyAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    NgbModule,
    NgxEchartsModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    LaddaModule.forRoot({style: 'expand-left'}),
    UserDashboardRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AgmCoreModule,
  ]
})
export class UserDashboardModule {
}
