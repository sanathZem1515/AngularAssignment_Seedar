import { ActionReducerMap } from '@ngrx/store';
import * as fromContract from '../ContractStore/contract.reducer';

export interface AppState {
  contract: fromContract.ContractReducerType;
}