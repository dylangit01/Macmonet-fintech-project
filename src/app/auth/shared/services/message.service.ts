import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {distinctUntilChanged, pluck} from "rxjs/operators";

export enum MessageType {
  Info = 'info',
  Error = 'danger',
  Success = 'success',
  Message  = 'warning',
  Primary = 'primary',
  Secondary = 'secondary'
}

export class Message {
  id: number | string
  message: string
  type: MessageType
  timer?: boolean
  countSeconds?: number

  constructor(message: string, type: MessageType, timer?: boolean, countSeconds?: number) {
    this.id = Math.floor(Math.random() * 1000000000000000000000000000000000000000000000000000000000 + 1)
    this.message = message
    this.type = type
    this.timer = timer
    this.countSeconds = countSeconds
  }
}

export interface MessageQueue {
  [key: string]: Message []
}

const messageQu: MessageQueue = {
  info: []
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new BehaviorSubject<MessageQueue>(messageQu)
  private messageQu$ = this.subject.asObservable().pipe(distinctUntilChanged())

  constructor() { }

  get value() {
    return this.subject.value
  }

  set(type: MessageType, message: Message) {
    let arr = this.value.hasOwnProperty(type)? [... this.value[type], message] : [message]
    this.subject.next({... this.value, [type]: arr})
  }

  select<T>(type: MessageType): Observable<T> {
    // @ts-ignore
    return this.messageQu$.pipe(pluck(type))
  }

  unset(type: MessageType, message: Message) {
    if(!this.value.hasOwnProperty(type)){
      return
    }
    let arr = this.value[type].filter(value => value.id !== message.id)
    this.value[type] = arr
    this.subject.next({... this.value})         //这里为什么不需要写：[type]：arr，像54行那样？
  }

  }
