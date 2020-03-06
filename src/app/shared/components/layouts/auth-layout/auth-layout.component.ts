import { Component, OnInit } from '@angular/core';
import {Message, MessageService, MessageType} from "../../../../auth/shared/services/message.service";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  ngOnInit() {
  }

  // this is the test for message function
  onPushMessage() {
    const msg: Message = new Message('Test message1', MessageType.Info)    //new 一个 message 就可以了
    this.msgService.set(MessageType.Info, msg)						//然后用service里面的set方法获取信息
  }

}
