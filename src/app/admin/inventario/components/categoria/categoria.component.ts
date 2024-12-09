import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  
  visible: boolean = false;
  categoriaForm = new FormGroup({
    nombre: new FormControl,
    detalle: new FormControl
  }) 
  
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
  showDialog() {
    this.visible = true;
  }

  guardarCategoria(){
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.visible = false;
        this.getCategorias()
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}

