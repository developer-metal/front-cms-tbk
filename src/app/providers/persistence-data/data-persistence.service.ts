import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { State } from '../../storage/reducer/resources.reducer';
import { ResourcesCMS } from '../../interfaces/resources.interface';
import { loadResourcesSuccess } from '../../storage/actions/resources.actions';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {

  private key: string = environment.key;
  constructor(private store: Store<State>) { }

  public saveData(value: string): void {
    const encrpt = this.encrypt(JSON.stringify(value));
    this.saveRedux(encrpt);
  }
  
  public  getData(): string {
    const infodata = this.getRedux();
    const decrypt = this.decrypt(infodata);
    return decrypt;
  }
  public removeData(key: string):void {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
  private encrypt(data: string): string {
    const encrypt: string = CryptoJS.AES.encrypt(data, this.key).toString();
    return encrypt;
  }
  private decrypt(data: string): string {
    const decrypt: string = CryptoJS.AES.decrypt(data, this.key).toString(CryptoJS.enc.Utf8)
    return JSON.parse(decrypt);
  }
  public saveRedux(data: any):void {
    this.store.dispatch(loadResourcesSuccess({ payload: data as ResourcesCMS[]}));
  }
  public getRedux(): string {
    let infodata: string = '';
     this.store.select<State>('Resourcess' as any).subscribe(({payload}: any) => {
     infodata = payload;
  });
  return infodata;
 }
}