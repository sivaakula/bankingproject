import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { NomineeComponent } from './nominee/nominee.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionRecordsComponent } from './transaction-records/transaction-records.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent,
    AccountComponent,
    BeneficiaryComponent,
    NomineeComponent,
    TransactionsComponent,
    DepositComponent,
    FundTransferComponent,
    TransactionRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
