import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ApplicantComponent} from "./applicant/applicant.component";
import {ApplicationsComponent} from "./applications/applications.component";
import {BorrowerProfileComponent} from "./borrower-profile/borrower-profile.component";
import {CreditScoreComponent} from "./credit-score/credit-score.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DocumentsComponent} from "./documents/documents.component";
import {LenderProfileComponent} from "./lender-profile/lender-profile.component";
import {LoanOptionComponent} from "./loan-option/loan-option.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {SubjectPropertyComponent} from "./subject-property/subject-property.component";

const routes: Routes = [
  {
    path: 'applicant',
    component: ApplicantComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'borrower-profile',
    component: BorrowerProfileComponent
  },
  {
    path: 'credit-score',
    component: CreditScoreComponent
  },
  {
    path: 'user-dashboard',
    component: DashboardComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'lender-profile',
    component: LenderProfileComponent
  },
  {
    path: 'loan-option',
    component: LoanOptionComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'subject-property',
    component: SubjectPropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
