import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { TestingComponent } from './testing/testing.component';
import { authConfig } from './auth/oauth.config';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    { provide:OAuthStorage, useValue: localStorage },
    { provide: OAuthModuleConfig, useValue: authConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
