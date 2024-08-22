import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  Order } from "@features/dashboard/models";
import { io, Socket } from "socket.io-client";
@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    private url = 'http://localhost:5050';

    private socket = io(this.url);


    listenToSocketWithEventName(eventName: string): Observable<Order> {
        return new Observable((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(JSON.parse(data));
            });
        });
    }

    connect(): void {
        this.socket = io(this.url);
    }

    disconnect(): void {
        this.socket.disconnect();
    }
}