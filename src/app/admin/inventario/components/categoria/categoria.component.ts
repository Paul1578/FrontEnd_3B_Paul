import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit{

  private categoriaService = inject(CategoriaService)

  categorias: Categoria[]=[]

  ngOnInit(): void {
    this.getCategorias() 
  }

  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
