import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Router} from "@angular/router";
import {SharedAnimations} from "../../../shared/animations/shared-animations";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {columnGroupWidths} from "@swimlane/ngx-datatable/release/utils";

pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  animations: [SharedAnimations]

})
export class WizardComponent implements OnInit {
  isCompleted: boolean;
  data: any = {
    // email: ''
  };
  basicForm: FormGroup;
  step2Form: FormGroup;

  selectedLoanOp1: boolean = false;
  selectedLoanOp2: boolean = false;
  selectedLoanOp3: boolean = false;
  selectedLoanOp4: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.basicForm = this.fb.group({
      firstName: [this.data],
      lastName: [this.data],
      middleInitial: [this.data],
      birthday: [this.data],
      email: [this.data],
      phone: [this.data],
      streetNum: [this.data],
      streetName: [this.data],
      streetType: [this.data],
      unitNum: [this.data],
      city: [this.data],
      province: [this.data],
      country: [this.data],
      postCode: [this.data],
      addressStatus: [this.data],
      monAtAddress: [this.data],
      creditScore: [this.data],

      profilePic: [this.data],
    });

    this.step2Form = this.fb.group({
      propertyAccessContact: [''],
      contactFirstName: [''],
      contactLastName: [''],
      contactEmail: [''],
      contactPhones:this.fb.array([this.fb.group({otherContactPhone:''})]),
      // otherPhones: this.fb.array([]),
      firstMortCo: [''],
      firstLoanType: [''],
      firstRateType: [''],
      firstIntRate: [''],
      firstMortAmt: [''],
      firstMortBal: [''],
      firstMortPayAmt: [''],
      firstMortIntAmt: [''],
      exiMortInsPreAmt: [''],
      firstPayFrequency: [''],
      firstMaturityDate: [''],
      firstColMort: [''],
      firstColAmt: [''],

      secMortCo: [''],
      secLoanType: [''],
      secRateType: [''],
      secIntRate: [''],
      secMortAmt: [''],
      secMortBal: [''],
      secMortPayAmt: [''],
      secMortIntAmt: [''],
      secExiMortInsPreAmt: [''],
      secPayFrequency: [''],
      secMaturityDate: [''],
      secColMort: [''],
      secColAmt: [''],
      assetTotal: [''],
      releAssets: [''],
      totalDebtBal: [''],
      totalDebtValue: [''],
      totalDebtMonPay: [''],
      allLiab: [''],
      lawyerFirstName: [''],
      lawyerLastName: [''],
      lawyerCoName: [''],
      lawyerEmail: [''],
      lawyerPhone: [''],
      lawyerFax: [''],
      lawyerAddress: [''],
      agentPrivateNotes: [''],
      agentNotesToAppraiser: [''],

      subjectPic:[''],

      experience: [this.data],
      asignedTo: [''],
      currencyType: ['']
    });
  }

  firstMortAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.firstMortAmt = str
    this.step2Form.patchValue(tmp)
  }

  firstMortBal(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.firstMortBal = str
    this.step2Form.patchValue(tmp)
  }

  firstMortPayAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.firstMortPayAmt = str
    this.step2Form.patchValue(tmp)
  }

  firstMortIntAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.firstMortIntAmt = str
    this.step2Form.patchValue(tmp)
  }

  exiMortInsPreAmt(str: string) {
    str = this.numberWithCommas(str)
    console.log(str)
    let tmp = this.step2Form.value
    tmp.exiMortInsPreAmt = str
    this.step2Form.patchValue(tmp)
  }

  firstColAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.firstColAmt = str
    this.step2Form.patchValue(tmp)
  }

  secMortAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secMortAmt = str
    this.step2Form.patchValue(tmp)
  }

  secMortBal(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secMortBal = str
    this.step2Form.patchValue(tmp)
  }

  secMortPayAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secMortPayAmt = str
    this.step2Form.patchValue(tmp)
  }

  secMortIntAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secMortIntAmt = str
    this.step2Form.patchValue(tmp)
  }

  secExiMortInsPreAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secExiMortInsPreAmt = str
    this.step2Form.patchValue(tmp)
  }

  secColAmt(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.secColAmt = str
    this.step2Form.patchValue(tmp)
  }

  assetTotal(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.assetTotal = str
    this.step2Form.patchValue(tmp)
  }

  totalDebtBal(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.totalDebtBal = str
    this.step2Form.patchValue(tmp)
  }

  totalDebtValue(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.totalDebtValue = str
    this.step2Form.patchValue(tmp)
  }

  totalDebtMonPay(str: string) {
    str = this.numberWithCommas(str)
    let tmp = this.step2Form.value
    tmp.totalDebtMonPay = str
    this.step2Form.patchValue(tmp)
  }

  numberWithCommas(str: string) {
    let currency = parseFloat(str.replace(/,/g, ""))
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency
  }

  loanOption1Selected () {
    this.selectedLoanOp1 = !this.selectedLoanOp1
  }

  loanOption2Selected () {
    this.selectedLoanOp2 = !this.selectedLoanOp2
  }

  loanOption3Selected () {
    this.selectedLoanOp3 = !this.selectedLoanOp3
  }

  loanOption4Selected () {
    this.selectedLoanOp4 = !this.selectedLoanOp4
  }

  ngOnInit() {
  }

  onFirstFinish() {
    // const {firstName,lastName} = this.basicForm.value
    console.log(this.data.firstName)

  }

  onSecFinish() {
    console.log(this.step2Form.value.asignedTo)
  }

  onStep1Next(e) {
    localStorage.setItem('step1form', JSON.stringify(this.data))
  }
  onStep2Next(e) {
    localStorage.setItem('step2form', JSON.stringify(this.step2Form.value))
  }
  onStep3Next(e) {}
  onComplete(e) {
    // postpone the page to dashboard
    setTimeout(_=> {
      this.router.navigateByUrl('/user-dashboard/user-dashboard')
    },500)
    this.onFirstFinish()
    this.onSecFinish()
  }


  generateStep1Pdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinitionStep1();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }


  getDocumentDefinitionStep1() {
    localStorage.setItem('step1form', JSON.stringify(this.data));
    return {
      content: [

        {
          columns: [
            this.getProfilePic(),

            {
              qr: this.data.firstName + ' '+ this.data.lastName + ', Contact No :' + this.data.phone,
              fit: 100,
              alignment: 'right',
              margin: [0, 0, 10,0]
            },
          ]
        },

        {
          text: 'Applicant Basic Info',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0,0,0,20]
        },

        this.getAptBasicInfo1(this.data),

        this.getAptBasicInfo2(this.data),

        {
          text: 'Signature',
          style: 'sign'
        },

        {
          columns: [
            {
              text: `(${this.data.firstName +' '+ this.data.lastName})`,
              alignment: 'right',
            }
          ]
        },
      ],
      // PDF Metadata
      info: {
        title: this.data.firstName + this.data.lastName + '_Basic Info',
        author: this.data.firstName + this.data.lastName,
        subject: 'Applicant Basic Info',
        keywords: 'Applicant, Info',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    }
  }

  getAptBasicInfo1(filledInfo: any) {
    console.log(filledInfo)
    return {
      margin: [0,0,0,20],
      table: {
        widths: ['*', '*', '*'],
        body: [
          [{
            text: 'firstName',
            style: 'tableHeader'
          },
            {
              text: 'lastName',
              style: 'tableHeader'
            },
            {
              text: 'middleInitial',
              style: 'tableHeader'
            },
          ],
          ...[filledInfo].map(data => {
            return [data.firstName, data.lastName, data.middleInitial];
          })
        ]
      }
    }
  }

  getAptBasicInfo2(filledInfo: any) {
    console.log(filledInfo)
    return {
      margin: [0,0,0,20],
      table: {
        widths: ['*', '*'],
        body: [
          [{
            text: 'birthday',
            style: 'tableHeader'
          },
            {
              text: 'phone',
              style: 'tableHeader'
            },
          ],
          ...[filledInfo].map(data => {
            return [data.birthday.year+'-'+data.birthday.month+'-'+data.birthday.day, data.phone];
          })
        ]
      }
    }
  }


  getProfilePic() {
    if (this.data.profilePic) {
      return {
        image: this.data.profilePic ,
        width: 75,
        alignment : 'left',
        margin: [20,0,0,20],
        opacity: 0.8,
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.data.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  addOtherPhoneAtBF() {
    console.log(this.data.phone)
    this.data.phone.push(this.fb.group(this.data.phone))
  }

  // deleteOtherPhoneAtBF(index) {
  //   this.otherPhonesAtBF.removeAt(index)
  // }


// Step2Form transfer to PDF codes:------------------------------------------------>

  generateStep2Pdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinitionStep2();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  getDocumentDefinitionStep2() {
    localStorage.setItem('step2form', JSON.stringify(this.step2Form.value));
    console.log(this.step2Form.value.contactPhones)
    return {
      content: [

        {
          columns: [
            this.getSubjectPic(),

            {
              qr: this.step2Form.value.contactFirstName + ' '+ this.step2Form.value.contactLastName + ', Contact No :' + this.step2Form.value.contactPhones,
              fit: 100,
              alignment: 'right',
              margin: [0, 0, 10,0]
            },
          ]
        },

        {
          text: 'Subject Property Info',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0,0,0,20]
        },

        this.getSubjectInfo1(this.step2Form.value),

        {
          text: 'Contact Phone(s)',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.step2Form.value.contactPhones.filter((value, index) => index % 3 === 0).map(s => s.otherContactPhone)

              ]
            },
            {
              ul : [
                ...this.step2Form.value.contactPhones.filter((value, index) => index % 3 === 1).map(s => s.otherContactPhone)
              ]
            },
            {
              ul : [
                ...this.step2Form.value.contactPhones.filter((value, index) => index % 3 === 2).map(s => s.otherContactPhone)
              ]
            }
          ]
        },


        this.getSubjectInfo2(this.step2Form.value),

        {
          text: 'Signature',
          style: 'sign'
        },

        {
          columns: [
            {
              text: `(${this.step2Form.value.contactFirstName +' '+ this.step2Form.value.contactLastName})`,
              alignment: 'right',
            }
          ]
        },
      ],
      // PDF Metadata
      info: {
        title: this.step2Form.value.contactFirstName + this.step2Form.value.contactLastName + '_Subject Info',
        author: this.step2Form.value.contactFirstName + this.step2Form.value.contactLastName,
        subject: 'Applicant Subject Info',
        keywords: 'Applicant, Info',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    }
  }


  getSubjectInfo1(filledInfo: any) {
    console.log(filledInfo)
    return {
      margin: [0,0,0,20],
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'propertyAccessContact',
            style: 'tableHeader'
          },
            {
              text: 'contactFirstName',
              style: 'tableHeader'
            },
            {
              text: 'contactLastName',
              style: 'tableHeader'
            },
            {
              text: 'contactEmail',
              style: 'tableHeader'
            }
          ],
          ...[filledInfo].map(info => {
            return [info.propertyAccessContact, info.contactFirstName, info.contactLastName, info.contactEmail];
          })
        ]
      }
    }
  }


  getSubjectInfo2(filledInfo: any) {
    console.log(filledInfo)
    return {
      margin: [0,0,0,20],
      table: {
        widths: ['*', '*', '*'],
        body: [
          [{
            text: 'firstMortCo',
            style: 'tableHeader'
          },
            {
              text: 'firstLoanType',
              style: 'tableHeader'
            },
            {
              text: 'firstRateType',
              style: 'tableHeader'
            },
          ],
          ...[filledInfo].map(info => {
            return [info.firstMortCo, info.firstLoanType, info.firstRateType];
          })
        ]
      }
    }
  }


  getSubjectPic() {
    if (this.step2Form.value.subjectPic) {
      return {
        image: this.step2Form.value.subjectPic,
        width: 80,
        alignment : 'left',
        margin: [20,0,0,20],
        opacity: 0.8,
      };
    }
    return null;
  }

  subjectPicChanged(e) {
    const file = e.target.files[0];
    this.getSubBase64(file);
  }
  getSubBase64(file) {
    const subReader = new FileReader();
    subReader.readAsDataURL(file);
    subReader.onload = () => {
      console.log(subReader.result);
      this.step2Form.value.subjectPic = subReader.result as string;
    };
    subReader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }


// Add more required fields based on reactive forms
  get otherPhones() {
    return this.step2Form.get('contactPhones') as FormArray
  }

  addOtherPhone() {
    this.otherPhones.push(this.fb.group({otherContactPhone:''}))
  }

  deleteOtherPhone(index) {
    this.otherPhones.removeAt(index)
  }

// Clear localStorage data:
  resetBasicForm() {
    localStorage.clear()
  }

  resetStep2Form() {
    localStorage.clear()
  }




}

