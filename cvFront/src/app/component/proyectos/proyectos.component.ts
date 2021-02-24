import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projectModel';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  arrProyectos:Project[];
  arrCategoria: String [];

  constructor(private projectService: ProjectService) {  
  }

  ngOnInit(): void {
    this.obtenerProyectos()
    this.cargarCategorias()
  }

  async obtenerProyectos(){
    this.arrProyectos = await this.projectService.getAllProjects();
    console.log(this.arrProyectos)
    const arrayString = this.arrProyectos.map(proyecto =>{
      return proyecto.categoria;
    })
    this.arrCategoria = Array.from(new Set(arrayString));
    console.log(this.arrCategoria);
  }

  async cargarCategorias(categoria = ''){
    if(categoria !== ''){
      this.arrProyectos = await this.projectService.getProjectsByCategory(categoria);
    }else{
      this.arrProyectos = await this.projectService.getAllProjects();
    } 
  }
}
