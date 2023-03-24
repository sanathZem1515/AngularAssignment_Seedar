import { Contract } from '../../modal/contract.model';
import { dataContracts } from '../constants';
import * as ContractActions from './contract.actions';

export interface ContractReducerType {
  contracts: Contract[];
  selectedContracts: Contract[];
  cashKickName: string;
}

const initialState: ContractReducerType = {
  contracts: dataContracts,
  selectedContracts: [],
  cashKickName: '',
};

export function ContractReducer(
  state = initialState,
  action: ContractActions.ContractActions
) {
  switch (action.type) {
    case ContractActions.SET_ALL_CONTRACTS:
      return {
        ...state,
        contracts: [...action.payload],
      };
    case ContractActions.SET_SELECTED_CONTRACTS:
      return {
        ...state,
        selectedContracts: [...action.payload],
      };
    case ContractActions.ADD_CASH_KICK_NAME:
      return {
        ...state,
        cashKickName: action.payload,
      };
    default:
        return state;
  }
}
