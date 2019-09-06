import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseService } from './entreprise.service';
import { MenuComponent } from './menu/menu.component';
import { DepotComponent } from './depot/depot.component';
import { CompteComponent } from './compte/compte.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListEntrepriseComponent } from './entreprise/list-entreprise/list-entreprise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntrepriseComponent,
    MenuComponent,
    DepotComponent,
    CompteComponent,
    UtilisateurComponent,
    ListEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, EntrepriseService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
