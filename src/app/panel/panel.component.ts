import { Component, OnInit } from '@angular/core';
import { PanelItem } from '../model/panel-item';
import { ServItemService } from '../services/serv-item.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private servItemService:ServItemService) { }

  ngOnInit() {
    this.consul();
    //this.envio();
  }
  categorias=[
    {id:1,name:"RÉGIMEN TRIBUTARIO SIMPLIFICADO",level:0,type:"C",fatherId:"",fileUrl:"assets/img/panel/ico_RTS.gif",target:"#rts",subTitle:"(RTS)"},
    {id:2,name:"RÉGIMEN AGROPECUARIO UNIFICADO",level:0,type:"C",fatherId:"",fileUrl:"assets/img/panel/ico_RAU.gif",target:"#rau",subTitle:"(RAU)"},
    {id:3,name:"SISTEMA TRIBUTARIO INTEGRADO",level:0,type:"C",fatherId:"",fileUrl:"assets/img/panel/ico_STI.gif",target:"#sti",subTitle:"(STI)"},
    {id:4,name:"RÉGIMEN",level:0,type:"C",fatherId:"",fileUrl:"assets/img/panel/ico_RegGral.gif",target:"#mod2",subTitle:"GENERAL"}
  ];
  cat=[
    {"id_panel":1,"name":"R\u00c9GIMEN TRIBUTARIO SIMPLIFICADO","url_image":"assets\/img\/panel\/ico_RTS.gif","father_id":0,"lavel":0,"url_pdf":null,"target":"#rts"},
    {"id_panel":2,"name":"R\u00c9GIMEN AGROPECUARIO UNIFICADO","url_image":"assets\/img\/panel\/ico_RAU.gif","father_id":0,"lavel":0,"url_pdf":null,"target":"#rau"},
    {"id_panel":3,"name":"SISTEMA TRIBUTARIO INTEGRADO","url_image":"assets\/img\/panel\/ico_STI.gif","father_id":0,"lavel":0,"url_pdf":null,"target":"#sti"},
    {"id_panel":4,"name":"R\u00c9GIMEN<br>GENERAL","url_image":"assets\/img\/panel\/ico_RegGral.gif","father_id":0,"lavel":0,"url_pdf":null,"target":"#rg"},
    {"id_panel":5,"name":"Empresa Jur\u00eddica","url_image":"assets\/img\/panel\/ico_RG_1.gif","father_id":4,"lavel":1,"url_pdf":null,"target":"#rg1"},
    {"id_panel":6,"name":"Empresa \nUnipersonal","url_image":"assets\/img\/panel\/ico_RG_2.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":7,"name":"Profesionales \nIndependientes \nu Oficios","url_image":"assets\/img\/panel\/ico_RG_3.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":8,"name":"Consultores de L\u00ednea","url_image":"assets\/img\/panel\/ico_RG_4.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":9,"name":"Alquileres","url_image":"assets\/img\/panel\/ico_RG_5.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":10,"name":"Transporte","url_image":"assets\/img\/panel\/ico_RG_6.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":11,"name":"Pr\u00e9stamos Personas \nNaturales","url_image":"assets\/img\/panel\/ico_RG_7.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":12,"name":"R\u00e9gimen Tributario \nEspecial","url_image":"assets\/img\/panel\/ico_RG_8.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null},
    {"id_panel":13,"name":"Anticr\u00e9ticos","url_image":"assets\/img\/panel\/ico_RG_9.gif","father_id":4,"lavel":1,"url_pdf":null,"target":null}]
    
    firstElemet: Array<PanelItem> = []; 
    subElements;
    envio(){ 
      var i=0;     
      this.cat.forEach(element => {
        if(element.lavel==0){
          this.firstElemet.push(element);
          i++;
        }
        console.log("name: "+element.name);
      });
    }
    mostrar(){
      this.firstElemet.forEach(element => {
        console.log("nombre : "+JSON.stringify(element));
      });
    }
    consul(){
      this.servItemService.consultaResp().subscribe(
        res=>{
          var respues=JSON.parse(JSON.stringify(res))._body;
          console.log(respues);
        },
        error=>console.log(error)
      )
    }
}
