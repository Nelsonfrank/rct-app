interface BuyerActionType {
  types: string;
  payload: Array<any>;
  error: Array<any>;
}

interface BuyerStateType {
  loading: boolean;
  data: Array<any>;
  error: Array<any>;
}
