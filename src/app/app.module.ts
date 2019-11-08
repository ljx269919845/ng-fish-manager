import { ServiceModule } from './service/service.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { CustomRouteReuseStrategy } from './core/CustomRouteReuseStrategy';

// import './mock';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    ContentModule,
    ServiceModule,
    ToastModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
