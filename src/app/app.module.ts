import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImagesService } from './services/images.service';
import { BlogComponent } from './blog/blog.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { ContactComponent } from './contact/contact.component';
import { GlobalVariable } from './constant/variablesGlobales';
import { AdminComponent } from './admin/admin.component';
import { MenutopComponent } from './admin/menutop/menutop.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProfileComponent } from './user/profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: GlobalVariable.BASE_API_URL, component: AboutComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'new/user', component: NewUserComponent },
  { path: 'login/user', component: LoginComponent },
  { path: 'profile/user/:id', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormationComponent,
    PortfolioComponent,
    BlogComponent,
    ArrowsComponent,
    ContactComponent,
    AdminComponent,
    MenutopComponent,
    NewUserComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImagesService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
