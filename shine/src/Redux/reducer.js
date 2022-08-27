import * as types from "./actionTypes"
const initialState={
  applicants:[],
  isEror:false,
  isLoading:false,
  purchase:[]
}

const reducer=(state=initialState,action)=>{
const{type,payload}=action
switch(type)
{
  case types.GET_APPLICANT_REQUEST:
    return {
      ...state,isEror:false,isLoading:true
    }
    case types.GET_APPLICANT_SUCCESS:
    return {
      ...state,isEror:false,isLoading:false,applicants:payload
    }
    case types.GET_APPLICANT_FAILURE:
    return {
      ...state,isEror:true,isLoading:true
    }
   
      case types.ADD_SUCCESS:
        return {
          ...state,isEror:false,isLoading:false,purchase:[...payload]
        }
       
    default:
      return state;
}
}

export {reducer}