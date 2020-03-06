import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedAnimations} from "../../../shared/animations/shared-animations";

import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
  animations:[SharedAnimations]
})

export class ApplicationsComponent implements OnInit {
  code = ` This is the simple code,
 This is the simple code,
 This is the simple code,
 This is the simple code,
 This is the simple code,
  `;

  name = ''

  @ViewChild('pdfFile', {static: false}) pdfFile: ElementRef

  constructor() {
  }

  ngOnInit() {
  }

  public downloadAsPDF() {
    const doc = new jspdf();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfFile.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 208,
      'elementHandlers': specialElementHandlers
    });

    doc.save('MyDoc.pdf');
  }


  public captureScreen()
  {
    let data = document.getElementById('pdfFile');
    html2canvas(data).then(canvas => {
// Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 800;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('PDFfile.pdf'); // Generated PDF
    });
  }



}

