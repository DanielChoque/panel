import { Component, OnInit } from '@angular/core';
import { PanelItem } from '../model/panel-item';
import { ServItemService } from '../services/serv-item.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  panelItemList:Array<PanelItem>=new Array<PanelItem>();
  itemsReg:Object[]=[];


  hiddenMenu:boolean=false;
  hiddenMenuAux:boolean=true;
  hiddenPanelInfo:boolean=true;
  panelItemUni:PanelItem =new PanelItem();
  pdfLink
ss
link=this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/panel/ico_RAU.gif")//"assets/img/panel/ico_RAU.gif";
  constructor(private servItemService:ServItemService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.consul();
  }


    firstElemet: Array<PanelItem> =new Array<PanelItem>(); 
    menuElements: Array<PanelItem>;
    auxElements : Array<PanelItem>;
    subElements : Array<PanelItem>;

    mostrar(){
      this.firstElemet.forEach(element => {
        console.log("nombre : "+JSON.stringify(element));
      });
    }
    consul(){
      this.servItemService.consultaResp().subscribe(
        res=>{
          var respues=JSON.parse(JSON.stringify(res))._body;
          if(respues!=""){
            this.firstElemet=JSON.parse(respues);
            this.menuHome();
          }                    
        
        },
        error=>console.log(error)
      )
    }
    menuHome(){
      this.menuElements = new Array<PanelItem>();
      this.panelItemUni =new PanelItem();
      this.hiddenMenu=false
      this.hiddenMenuAux=true
      this.hiddenPanelInfo=true;
      this.firstElemet.forEach(element => {
        if(element.lavel==0){
          this.menuElements.push(element);
        }
      });       
    }   
    subCat(fa){
      this.subElements = new Array<PanelItem>();
      
      this.hiddenMenu=true;
      this.hiddenMenuAux=false;
      this.hiddenPanelInfo=true;
      
      this.firstElemet.forEach(element => {
        if(element.father_id==fa){
          this.subElements.push(element);
        }             
      });
      if(this.subElements.length==0){
        this.auxElements = new Array<PanelItem>();
        //this.hiddenPanelInfo=false;
        this.firstElemet.forEach(element => {
          if(element.id_panel==fa){ 
            this.panelItemUni=element;           
            //this.auxElements.push(element);
           // this.pdfLink=this.transform(element.url_pdf);               
          }
        });                  
      }
      if(this.panelItemUni.url_pdf!=""){
        this.hiddenPanelInfo=false;
        //this.pdfLink=this.transform(this.panelItemUni.url_pdf); 
        this.pdfLink=this.sanitizer.bypassSecurityTrustResourceUrl(this.panelItemUni.url_pdf);
      }


    } 
    
    transform(url: string): SafeResourceUrl {
      if (!url) {
          url = '';
      }
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
