import * as Types from "./actionTypes";

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
       case Types.LOGIN_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case Types.LOGIN_SUCCESS:
            return{
                ...state,
                isAuth:true,
                isLoading:false,
                token:action.payload,
                
            }
            case Types.LOGIN_FALIURE:
                return{
                    ...state,
                    isAuth:false,
                    token:"",
                    isError:true
                }
                case Types.LOGOUT_REQUEST:
                    return{
                        ...state,
                       isLoading:true
                    }
                    case Types.LOGOUT_SUCESS:
                        return{
                            ...state,
                            isAuth:false,
                            token:"",
                            isLoading:false

                        }
                        case Types.LOGOUT_FAILURE:
                            return{
                                ...state,
                                isError:true
                                
                            }
       default:
        return state;
    }
}