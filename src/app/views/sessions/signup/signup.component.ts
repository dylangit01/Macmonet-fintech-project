import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedAnimations} from 'src/app/shared/animations/shared-animations';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";
import {UserService} from "../../../shared/services/user.service";
import {MacError, User} from "../../../shared/models/user";
import {Message, MessageService, MessageType} from "../../../auth/shared/services/message.service";
import {Role} from "../../../shared/models/role";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})

export class SignupComponent implements OnInit {
  loading: boolean;
  loadingText: string;
  signupForm: FormGroup;
  duplicateUsername: boolean;
  termofUse: boolean;

  // @ts-ignore
  @ViewChild('usernameInput') usernameInput: ElementRef

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private msgService: MessageService
  ) {
    this.signupForm = this.fb.group({
      id: '',
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]],
      termofUse: ['', Validators.required],
    });
    this.duplicateUsername = false
    this.termofUse = false
  }

  get inputControl() {
    return this.usernameInput.nativeElement
  }

  ngOnInit() {
    fromEvent(this.inputControl, 'keyup').pipe(debounceTime(400),
      filter(obj => this.inputControl.value.length >= 4), distinctUntilChanged())
      .subscribe(obj => {
        // console.log(this.usernameInput.nativeElement.value)
        this.onCheckUserName(this.inputControl.value)
      })
  }

  onCheckUserName(username: string) {
    this.userService.checkUserExisted(username).subscribe((obj: MacError) => {
      console.log(obj.data)
      this.duplicateUsername = +(obj.data) > 0     //backend return a number to indicate if username exists, if > 0 means the username already exist
    }, error => this.duplicateUsername = false)
  }

  onTermofUser() {
    this.termofUse = !this.termofUse
    console.log(this.termofUse)
  }


  signup() {
    this.loading = true;
    this.loadingText = 'Signing up successfully!';
    const {username, email, password, repassword} = this.signupForm.value
    const user: User = {
      username,
      email,
      password,
      repassword,
      role: [Role.User]
    }
    if (password === repassword && this.termofUse === true) {
      this.userService.createUser(user).subscribe((res: MacError) => {
        console.log('register user ok', res)
        this.msgService.set(MessageType.Info, new Message(`User ${user.username} created successfully`, MessageType.Primary))
        this.router.navigateByUrl('forms/wizard')
        this.loading = false;
      }, error => {
        console.log('register user failed', error)
        this.msgService.set(MessageType.Info, new Message(`User ${user.username} created failed! ${error.error.msg}`, MessageType.Error))
        this.loading = false;
      })
    } else if (password !== repassword ) {
      // window.confirm('your repassword is not match password')
      this.msgService.set(MessageType.Info, new Message(`Password do not match`, MessageType.Error))
      this.loading = false;
    }
    else if ( this.termofUse !== true) {
      this.msgService.set(MessageType.Info, new Message(`You must agree the Term of Use before creating an account`, MessageType.Error))
      this.loading = false;
    }
  }

  get usernameRequired() {
    const control = this.signupForm.get('username')
    return control.hasError('required') && control.touched
  }

  get passwordRequired() {
    const control = this.signupForm.get('password')
    return control.hasError('required') && control.touched
  }

  get passwordMinlength() {
    const control = this.signupForm.get('password')
    return control.hasError('minlength') && control.touched
  }

  get emailRequired() {
    const control = this.signupForm.get('email')
    return control.hasError('required') && control.touched
  }

  get repasswordRequired() {
    const constrol = this.signupForm.get('repassword')
    return constrol.hasError('required') && constrol.touched
  }

  get termofUserRequired() {
    const constrol = this.signupForm.get('termofUse')
    return constrol.hasError('required') && constrol.touched
  }

  // get passwordNotMatch() {)
  //   const control = this.signupForm.get('password'
  //   const reControl = this.signupForm.get('repassword')
  //  if(reControl.touched && (control !== reControl)) {
  //    return
  //  }
  // }

}


