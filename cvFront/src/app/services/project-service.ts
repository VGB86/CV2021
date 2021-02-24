import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/projectModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  arrProyectos:Project[];
  baseUrl:string;

  constructor( private httpClient: HttpClient) { 
      this.baseUrl = 'https://vgcv2021.herokuapp.com/api/proyectos';
      this.getToken();
  };

  getToken():void{
    let objToken: any;
    this.httpClient.get('https://vgcv2021.herokuapp.com/api/token')
    .subscribe(valor => { 
      objToken = valor;
      localStorage.setItem('token',objToken.token);
    });
  }

  getOptions(){
    const valores = {
      headers : new HttpHeaders({
        'access-token':localStorage.getItem('token'),
     })
    };
    return valores;
  }

  getAllProjects():Promise <Project[]>{
    const httpOptions = this.getOptions()
    return this.httpClient.get<Project[]>(this.baseUrl, httpOptions).toPromise()
  }

  getProjectsByCategory(Categoria:String):Promise <Project[]> {
    const httpOptions = this.getOptions()
    return this.httpClient.get<Project[]>(this.baseUrl + '/categoria/' + Categoria, httpOptions).toPromise()
  }

  getProjectById(id:string):Promise <Project>{
    const httpOptions = this.getOptions()
    return this.httpClient.get<Project>(this.baseUrl + id, httpOptions).toPromise()
  }
}
