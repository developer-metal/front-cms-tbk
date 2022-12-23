import { Injectable } from '@angular/core';
import { ResourcesService } from './resources.service';
import { DataPersistenceService } from '../persistence-data/data-persistence.service';
import { throwError, Observable, of, catchError, map, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesProviderService {

  constructor(private resourcessService: ResourcesService,
    private localService: DataPersistenceService) { }

  public getDocuments(): Observable<any> {

    const cbSuccess = (response: any): Observable<any> => {
      const catOne: Array<any> = response.docs;
      const formatOne = catOne.slice(0,2);
     
      const catTwo: Array<any> = response.docs;
      const formaTwo = catTwo.slice(2,4);

      const catTree: Array<any> = response.docs;
      const formatTree = catTree.slice(4,6);

      const repoGeneral: any = {
        catOne: formatOne,
        catTwo: formaTwo,
        catTrhe: formatTree
      };

    

      this.localService.saveData(repoGeneral);
      const responseFormat = this.localService.getData();
      console.log('response general1 ',responseFormat);
       return of(responseFormat);
    };
    const cbFailure = (error: any): Observable<any> => {
      console.log('error general ',error);
      return throwError(() => JSON.stringify(error));
    };

    return this.resourcessService.getDataResourcess()
    .pipe(map(cbSuccess), catchError(cbFailure));
  }
}
