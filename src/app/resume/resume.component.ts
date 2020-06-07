import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';




@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

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

  }
  getResume(){
    const user = sessionStorage.getItem('header');
    const resumeData = {
      content:[
        {
          text: 'John Adeniran' , style: 'header'
        },
        {
          text: 'web developer - jasolajohn@gmail.com', style: 'sub'
        },
        {
          text: 'Lagos, Nigeria - +23408131510308', style: 'sub'
        },
        {
          text: 'SUMMARY', style: { alignment: 'left', bold: true}
        },
        {
          text: `Lorem ipsum is placeholder text commonly used in the graphic, 
          print, and publishing industries for previewing layouts and visual
           mockups.`
        },
        {
            columns: [
              {
                width: 'auto',
                text: 'Web/Mobile  Developer'
              },
            {
              width: '100',
              text: '8 March 2019 - 10 August 2020',
              style: 'date'
            },
            {
              width: 100,
                ul: [
                  'hjfytfhjgkjhihihibjbjbjbnkjbkjbknkjkkknkknknknknknkknknj',
                  'hjfytfhjgkjhihihibjbjbjbnkjbkjbknkjkkknkknknknknknkknknj',
                  'hjfytfhjgkjhihihibjbjbjbnkjbkjbknkjkkknkknknknknknkknknj'

                ]

            }
            ],
            columnGap: 10
          }
        
    ],
    styles:
    { 
      header: {
      alignment: `center`,
      fontSize: 40
    },
      sub: { fontSize: 10, alignment: 'center' },
      date: { alignment: 'right'}
  },
    defaultStyle: {
      fontSize: 10,
      bold: false

    } };
    pdfMake.createPdf(resumeData).open();
  }


}
