import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  name = 'Export Loan Docs to PDF';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 208,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }


}
