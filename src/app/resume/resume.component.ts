import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';




@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  user;
  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.getData();
  }
  saveData(){

  }

  confirmData(){

  }

  getData(){
    this.user = sessionStorage.getItem('header');
    console.log(this.user);
  }
  getResume(){
    const resumeData = { content:[ {text:'John Adeniran', fontSize: 20, style: 'header'}, 'a freelance web/software developer'] };
    pdfMake.createPdf(resumeData).open();
  }


}
