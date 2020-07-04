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

          stack: [
          'John Adeniran Omojashola' ,
            {
              text: 'web developer - jasolajohn@gmail.com', margin:[0,10,0,0], style: 'sub'
            },
            {
              text: 'Lagos, Nigeria - +23408131510308', style: 'sub'
            }
          ],
          style: 'header'
        },
        {
          text: 'SUMMARY', margin: [ 0, 20, 0, 10],  style: { bold: true}
        },
        {
          text: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
           style: {
             alignment: 'left'
           }
        },
        {
          text: 'EDUCATION', margin: [ 0, 20, 0, 10], style: { bold: true }
        },
        {
          columns: [
            {
              width: '*',
              text: 'University of Toronto',
              style: { alignment: 'left', bold: true }
            },
            {
              width: 'auto',
              text: 'August 2012 - February 2014',
              style: { alignment: 'right' }
            }
          ]
        },
        {
          text: 'BSc. in Electrical Engineering', margin: [ 0, 0, 0, 10]
        },
        {
          columns: [
            {
              width: '*',
              text: 'Birch Freeman High School',
              style: { alignment: 'left', bold: true }
            },
            {
              width: 'auto',
              text: 'May 2007 - February 2012',
              style: { alignment: 'right' }
            }
          ]
        },
        {
          text: 'WASSCE/NECO', margin: [ 0, 0, 0, 10]
        },
        {
          text: 'EXPERIENCE', margin: [0, 20, 0, 10], style: { bold: true }
        },
        {
            columns: [
              {
                width: '*',
                text: 'Web/Mobile  Developer',
                style: {alignment: 'left', bold: true}
              },
            {
              width: 'auto',
              text: 'March 2019 - August 2020',
              style: { alignment: 'right'}
            }
            ]
        },
        {
          ul: [
            'Integrate code changes, test code changes, and document code changes',
            'Developed Perl and PHP scripts to translate data between applications',
              'Developed automation scripts to test storage appliances in Python',
              'Practice agile development methodologies and work with current networking technologies',
              'Used Hadoop to build a scalable distributed data solution'

          ],
          margin: [0, 0,0, 10]

        },
        {
          columns: [
            {
              width: '*',
              text: 'Tradelot, Software Developer',
              style: { alignment: 'left', bold: true }
            },
            {
              width: 'auto',
              text: 'June 2008 - January 2020',
              style: { alignment: 'right' }
            },

          ]
        },
        {
          ul: [
            'Wrote, modified, and debugged software for clients',
            'Developed code to complete assigned project by deadline',
            'Developed HTML, CSS, JavaScript, and JSP pages for user interaction',
            'Wrote Python scripts to load data and parse XML documents'

          ],
          margin: [0, 0, 0, 10]

        },
        {
          text: 'SKILLS', margin: [ 0, 20, 0, 10], style: { bold: true }
        },
        {
          ul: [
            'JavaScript',
            'HTML',
            'CSS'
          ]
        }
    ],
    styles:
    {
      header: {
      alignment: 'center',
      fontSize: 40
    },
      sub: { fontSize: 10, alignment: 'center' },
      date: { alignment: 'right'}
  },
    defaultStyle: {
      fontSize: 14,
      bold: false

    } };
    pdfMake.createPdf(resumeData).open();
  }


}
