import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp211190461Reducer from '../features/SignUp211190461/redux/reducers'
import SignIn43183282Reducer from '../features/SignIn43183282/redux/reducers'
import SignUp14183281Reducer from '../features/SignUp14183281/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp211190461: SignUp211190461Reducer,
SignIn43183282: SignIn43183282Reducer,
SignUp14183281: SignUp14183281Reducer,

});