import { Action } from '@ngrx/store';
import { Contract } from 'src/app/modal/contract.model';

export const SET_ALL_CONTRACTS = '[Contract] Add All Contracts';
export const SET_SELECTED_CONTRACTS = '[Contract] Add Selected Contracts';
export const ADD_CASH_KICK_NAME = '[Contract] Add Cash Kick Name';

export class SetAllContracts implements Action {
  readonly type = SET_ALL_CONTRACTS;
  constructor(public payload: Contract[]) {}
}


export class SetSelectedContracts implements Action {
  readonly type = SET_SELECTED_CONTRACTS;
  constructor(public payload: Contract[]) {}
}

export class AddCashKickName implements Action {
  readonly type = ADD_CASH_KICK_NAME;
  constructor(public payload: string) {}
}

export type ContractActions =
  | SetAllContracts
  | SetSelectedContracts
  | AddCashKickName;
