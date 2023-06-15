import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'terms-of-service', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
