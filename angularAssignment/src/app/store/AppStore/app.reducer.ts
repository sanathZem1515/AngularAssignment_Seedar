import { ActionReducerMap } from '@ngrx/store';
import * as fromContract from '../ContractStore/contract.reducer';

export interface AppState {
  contract: fromContract.ContractReducerType;
}

// export const appReducer: ActionReducerMap<AppState> = {
//     contract:fromContract.ContractReducer,
// };
