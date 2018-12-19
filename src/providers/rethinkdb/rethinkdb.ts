import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as r from 'rethinkdb';
// const r = require('rethinkdb');

@Injectable()
export class RethinkdbProvider {

    private _conn;

    connected$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
    ) {
        r.connect({
            host: 'localhost',
            port: 28015,
            db: 'invoices'
        }).then(data => console.log(data)).catch(err => console.error(err))
    }

}
