import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/components/layouts/auth-layout/auth-layout.component';
import {AuthGaurd} from './shared/services/auth.gaurd';
import {BlankLayoutComponent} from './shared/components/layouts/blank-layout/blank-layout.component';
import {AdminLayoutSidebarCompactComponent} from './shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import {AdminLayoutSidebarLargeComponent} from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import {SidebarCompactComponent} from "./shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component";
import {HeaderSidebarCompactComponent} from "./shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component";

const adminRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'uikits',
    loadChildren: () => import('./views/ui-kits/ui-kits.module').then(m => m.UiKitsModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./views/inbox/inbox.module').then(m => m.InboxModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./views/calendar/calendar.module').then(m => m.CalendarAppModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./views/data-tables/data-tables.module').then(m => m.DataTablesModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./views/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },

];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/signin',
    pathMatch: 'full'
  },

  //add forms url:
  {
    path: '',
    component: AdminLayoutSidebarCompactComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule)
      }
    ]
  },
  // add user-dashboard url:
  {
    path: '',
    component: AdminLayoutSidebarCompactComponent,
    children: [
      {
        path: 'user-dashboard',
        loadChildren: () => import('./views/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
      }
    ]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarCompactComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
