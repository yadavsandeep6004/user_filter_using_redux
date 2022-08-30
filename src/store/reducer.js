
import ACTION from './action'


const initialState ={
    user:[],
    error:false,
    message:''
}


const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case ACTION.FETCH_USER_SUCCESS:
            return{
                ...state,
                user:[...action.payload.user],
                error:false,
                message:''
            }
        case ACTION.FETCH_USER_FAILED:
            return{
                ...state,
                user:[],
                error:true,
                message:action.payload.message
            }
            
    
        default:
            return state
    }

}

export default reducer 
