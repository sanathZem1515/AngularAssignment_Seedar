import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, map, take, tap } from 'rxjs';
import { Contract } from '../modal/contract.model';
import { ContractsService } from './contracts.service';
import { AppState } from '../store/AppStore/app.reducer';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit {
  constructor(
    private http: HttpClient,
    private contractsService: ContractsService,
    // private store: Store<AppState> 
  ) {}

  ngOnInit(): void {}

  storeContracts(contracts: Contract[]) {
    const url =
      'https://seedar-9e66c-default-rtdb.firebaseio.com/contracts.json';

    return this.http.put(url, contracts).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  storeSelectedContracts(contracts: Contract[]) {
    const url =
      'https://seedar-9e66c-default-rtdb.firebaseio.com/selectedContracts.json';

    return this.http.put(url, contracts).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  fetchContracts() {
    const url =
      'https://seedar-9e66c-default-rtdb.firebaseio.com/contracts.json';

    return this.http.get<Contract[]>(url).pipe(
      map((contracts) => {
        return contracts;
      }),
      tap((contracts) => {
        this.contractsService.setContracts(contracts);
      })
    );
  }

  fetchSelectedContracts() {
    const url =
      'https://seedar-9e66c-default-rtdb.firebaseio.com/selectedContracts.json';

    return this.http.get<Contract[]>(url).pipe(
      map((contracts) => {
        return contracts;
      }),
      tap((contracts) => {
        this.contractsService.setContracts(contracts);
      })
    );
  }
}
