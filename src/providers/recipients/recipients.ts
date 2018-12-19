import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RethinkdbProvider } from '../rethinkdb/rethinkdb';

/*
  Generated class for the RecipientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipientsProvider {

    constructor(
        private _rdb: RethinkdbProvider,
    ) {
        this._rdb.connected$.subscribe(conn => {
            console.log(conn);
        });
    }

}
