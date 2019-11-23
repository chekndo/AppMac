import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public subtitle: string;
  public viewPersonalData: boolean;
  public viewAutomovilData: boolean;
  public viewInsuranceData: boolean;
  public endEstatus: boolean;

  public userData: {
    personalData: {
      nombre: string,
      apellidos: string,
      documento: string,
      telefono: number,
      movilPhone: number,
      eMail: string,
      tipoVia: string,
      nombreVia:string,
      restoDireccion: string,
      codPostal: number,
      localidad: string,
      provincia: string
    },
    automovilData:{
      marca: string,
      modelo: string,
      caballosPotencia: number,
      cilendrada: number,
      matricula: string,
      anyoMatriculacion: number,
      color: string
    },    
    insuranceData:{
      tipoDeSeguro: string,
      mesDeContratacion: number,
      anyoDeContratacion: number
    }
  }


  constructor() { }

  ngOnInit() {

  }

  // Obtenemos los datos del cliente a tratar
  // Aquí iria la llamada al servicio que recupera 
  // los datos del usuario, tanto si es nuevo,
  // como si esta en tramite de una simulación
  public findClientValues(){
    this.userData= {
      personalData: { 
        nombre: 'Marcos',
        apellidos: 'Canedo Abad',
        documento: '71515836G',
        telefono: 987547258,
        movilPhone: 652021112,
        eMail: 'mckndo@gmail.com',
        tipoVia: 'Calle',
        nombreVia: 'Chano Piñeiro',
        restoDireccion: '1, 1º-B',
        codPostal: 32005,
        localidad: 'Ourense',
        provincia: 'Ourense'
      },
      automovilData: {
        marca: 'Hyundai',
        modelo: 'I30',
        caballosPotencia: 100,
        cilendrada: 1600,
        matricula: '6574-HTC',
        anyoMatriculacion: 2014,
        color: 'bLANCO'
      },
      insuranceData: {
        tipoDeSeguro: 'TR',
        mesDeContratacion: 2,
        anyoDeContratacion: 2020
      }
    };    
  }

  // Validamos estado de las imulación
  // para determinar lo que se tiene que mostrar.
  public statusValue(){
    if (this.endEstatus){
      this.subtitle = 'Estados de la simulación'
    } else {
      this.subtitle = 'Resumen de la simulación'
    }
  }

  public personalData(){
    this.viewPersonalData=true;
    this.viewAutomovilData = false;
    this.viewInsuranceData = false;
  }

  public automovilData(){
    this.viewAutomovilData=true;
    this.viewPersonalData = false;
    this.viewInsuranceData = false;
  }

  public insuranceData(){
    this.viewInsuranceData=true;
    this.viewPersonalData = false;
    this.viewAutomovilData = false;
  }

}
