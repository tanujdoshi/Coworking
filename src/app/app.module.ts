import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { BookspaceComponent } from "./bookspace/bookspace.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { ReqvisitComponent } from "./reqvisit/reqvisit.component";
import { SignupComponent } from "./signup/signup.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LogoutComponent } from "./logout/logout.component";
import { OtpComponent } from './otp/otp.component';
import { DetailArea1Component } from './detail-area1/detail-area1.component';
import { BookSinAreaComponent } from './book-sin-area/book-sin-area.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ForgotmailComponent } from './forgotmail/forgotmail.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookspaceComponent,
    HeaderComponent,
    LoginComponent,
    ReqvisitComponent,
    SignupComponent,
    TeamComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    OtpComponent,
    DetailArea1Component,
    BookSinAreaComponent,
    ViewDetailComponent,
    ForgotComponent,
    ForgotmailComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: false
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent,OtpComponent]
})
export class AppModule {}
