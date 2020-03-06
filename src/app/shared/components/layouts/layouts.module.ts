import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { HeaderSidebarLargeComponent } from './admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component';
import { AdminLayoutSidebarCompactComponent } from './admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SearchModule } from '../search/search.module';
import { SidebarLargeComponent } from './admin-layout-sidebar-large/sidebar-large/sidebar-large.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SidebarCompactComponent } from './admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component';
import { HeaderSidebarCompactComponent } from './admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component';
import { FooterComponent } from '../footer/footer.component';
import { CustomizerComponent } from '../customizer/customizer.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { FormsModule } from '@angular/forms';
import {AuthModule} from "../../../auth/auth.module";
import {HeaderComponent} from "./mac-admin-layout/header/header.component";
import {SidebarComponent} from "./mac-admin-layout/sidebar/sidebar.component";
import {MacAdminLayoutComponent} from "./mac-admin-layout/mac-admin-layout.component";

const components = [
    HeaderSidebarCompactComponent,
    HeaderSidebarLargeComponent,
    SidebarLargeComponent,
    SidebarCompactComponent,
    FooterComponent,
    CustomizerComponent,
    AdminLayoutSidebarLargeComponent,
    AdminLayoutSidebarCompactComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MacAdminLayoutComponent,
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    PerfectScrollbarModule,
    CommonModule,
    AuthModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
