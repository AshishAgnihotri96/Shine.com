import * as Types from "./actionTypes";
import {loadData,saveData} from "../../Utils/acessData"
const initialState={
    isAuth:loadData("isAuth")||false,
    token:loadData("token")||"",
    isError:false,
    isLoading:false
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
       case Types.LOGIN_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case Types.LOGIN_SUCCESS:
            


            let tokk=action.payload
                saveData("token",tokk)
                let isAuthh=true
                saveData("isAuth",isAuthh)
                return{
                     ...state,
                     isLoading:false,
                     isAuth:isAuthh,
                     token:tokk,
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

                    // let tokk=action.payload
                // saveData("token",tokk)
                // let isAuthh=true
                // saveData("isAuth",isAuthh)
                // return{
                //      ...state,
                //      isLoading:false,
                //      isAuth:isAuthh,
                //      token:tokk,
                //     }
                    case Types.LOGOUT_SUCESS:
                        let x=saveData("token","")
                        let y=saveData("isAuth",false)
                        let load=saveData("isLoding",false)
                        return{
                            ...state,
                            isAuth:y,
                            token:x,
                            isLoading:load

                        }
                        case Types.LOGOUT_FAILURE:
                            return{
                                ...state,
                                isError:true
                                
                            }
                            case Types.REGISTER_REQUEST:
                                return{
                                    ...state,
                                    isLoading:true
                                }
                                case Types.REGISTER_SUCCESS:
                                    return{
                                        ...state,
                                        isLoading:false
                                    }
                                    case Types.REGISTER_FAILURE:
                                        return{
                                            ...state,
                                            isError:false
                                        }
       default:
        return state;
    }
}