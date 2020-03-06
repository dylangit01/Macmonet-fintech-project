import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Message, MessageService, MessageType} from "../../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  message$: Observable<Message[]>
  subscriptionMessage: Subscription

  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.message$ = this.msgService.select<Message[]>(MessageType.Info);
    this.subscriptionMessage = this.message$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptionMessage.unsubscribe()
  }

  closeMessage (msg: Message) {
    this.msgService.unset(MessageType.Info, msg);         //这里closeMessage 在unset的时候，括号里的的参数必须是上面select的参数一致，不然系统关闭不了
  }

}
