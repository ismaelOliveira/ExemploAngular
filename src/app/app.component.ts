import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';

  formulario: FormGroup;
  selectedCar:number;
  mostrarError: boolean;

  listaCarros  =  [ 
    {  id : 1 ,  name : 'Volvo'  } , 
    {  id : 2 ,  name : 'Saab'  } , 
    {  id : 3 ,  name : 'Opel'  } , 
    {  id : 4 ,  name : 'Audi'  } , 
] ; 
  
  constructor(private formBUilder: FormBuilder){
    
  }

  ngOnInit(){
    
    this.formulario = this.formBUilder.group({
      nome:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      estado:['',[Validators.required]],
      carros:[null,Validators.required],
      emails:[[],Validators.required]

    });
  }
  onSubmit(){
    console.log(this.formulario);
  }


  verificaValidTouched(campo):boolean {
    if(!this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched){
      return true;
    }
    return false;
    
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  


}




