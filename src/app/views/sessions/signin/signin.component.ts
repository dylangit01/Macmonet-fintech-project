import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedAnimations} from 'src/app/shared/animations/shared-animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {fromEvent} from "rxjs";
import {count, debounceTime, distinctUntilChanged, filter} from "rxjs/operators";
import {MacError} from "../../../shared/models/user";
import {Message, MessageService, MessageType} from "../../../auth/shared/services/message.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
  loading: boolean;
  loadingText: string;
  signinForm: FormGroup;

  // 下面ViewChild在signin里应该用不上，是在signup的时候用来验证用户名是否存在的
  // @ts-ignore
  // @ViewChild('emailInput') emailInput: ElementRef

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // get inputControl() {
  //   return this.emailInput.nativeElement
  //  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.loadingText = 'Loading Dashboard Module...';
        this.loading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.loading = false;
      }
    });

    // track all input with conditions when inputting the signin info
    // fromEvent(this.inputControl, 'keyup').pipe(debounceTime(800),
    //   filter(obj => this.inputControl.value.length >= 4), distinctUntilChanged()
    // ).subscribe(this.inputControl.value)
  }

  get passwordRequired() {
    const control = this.signinForm.get('password')
    return control.hasError('required') && control.touched
  }

  get passwordMinlength() {
    const control = this.signinForm.get('password')
    return control.hasError('minlength') && control.touched
  }

  get actualLenght() {
    const control = this.signinForm.get('password')
    const actualLength:number = String(control.value).length
    return 6 - actualLength
  }

  get emailRequired() {
    const control = this.signinForm.get('email')
    return control.hasError('required') && control.touched
  }

  get emailRequiredTest() {        //这里不用get怎么实现？
    const control = this.signinForm.get('email')
    return control.touched && control.invalid
  }

  signin() {
    this.loading = true;
    this.loadingText = 'Sigining in...';
    const {email, password} = this.signinForm.value
    this.authService.signin(email, password).subscribe((obj: MacError) => {
      // console.log('login res:', obj)
      this.router.navigateByUrl('forms/wizard')
      this.loading = false
    }, error => {
      console.log('login failed:', error);
      this.msgService.set(MessageType.Info, new Message('Login failed!' + error.error.msg, MessageType.Error))
      this.loading = false
    })
  }


  //original version:
  // ngOnInit() {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
  //       this.loadingText = 'Loading Dashboard Module...';
  //
  //       this.loading = true;
  //     }
  //     if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
  //       this.loading = false;
  //     }
  //   });
  //
  //   this.signinForm = this.fb.group({
  //     email: ['test@example.com', Validators.required],
  //     password: ['1234', Validators.required]
  //   });
  // }
  //
  // signin() {
  //   this.loading = true;
  //   this.loadingText = 'Sigining in...';
  //   this.auth.signin(this.signinForm.value)
  //     .subscribe(res => {
  //       this.router.navigateByUrl('/dashboard/v1');
  //       this.loading = false;
  //     });
  // }
}
