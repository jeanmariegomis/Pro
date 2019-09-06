import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }
  Headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) };

  postFile(
    username: string, 
    Nom: string,
    Email: string,
    RaisonSociale: string,
    Ninea: string,
    Adresse: string,
    Solde: string,
    fileToUpload: File,
    password: string
    ) {
    const endpoint = 'http://localhost:8000/api/register';
    const formData: FormData = new FormData();

    formData.append('username', username);
    formData.append('Nom', Nom);
    formData.append('Email', Email);
    formData.append('RaisonSociale', RaisonSociale);
    formData.append('Ninea', Ninea);
    formData.append('Adresse', Adresse);
    formData.append('Solde', Solde);
    formData.append('imageFile', fileToUpload, fileToUpload.name );
    formData.append('password', password);
    return this.http.post(endpoint, formData,this.Headers);
  }
}
