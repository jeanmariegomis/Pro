import { ListEntrepriseComponent } from './entreprise/list-entreprise/list-entreprise.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
{path: '',redirectTo: '/login',pathMatch: 'full'},
{path: 'login',component: LoginComponent}, 
{path: 'entreprises',component:  ListEntrepriseComponent},
{path: 'entreprise',component: EntrepriseComponent},
{path: 'utilisateur',component: UtilisateurComponent},
{path: 'menu',component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
