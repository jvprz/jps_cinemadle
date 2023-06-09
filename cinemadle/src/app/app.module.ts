import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    FaqsComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    { provide: OAuthStorage, useValue: localStorage },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
