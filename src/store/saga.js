
import {takeEvery,put,call} from 'redux-saga/effects'
import  ACTION  from '../store/action'
import {getApi} from '../api'


function* workerSaga(action){
    console.log('worker',action)
    try {

       const res = yield call(getApi,action.payload)

       yield put({
        type:ACTION.FETCH_USER_SUCCESS,
        payload:{
            user:res
        }
       })
        
    } catch (error) {
        yield put({
            type:ACTION.FETCH_USER_FAILED,
            payload:{
                user:error
            }
           })
    }
}


function* wacherSaga(){
    yield takeEvery(ACTION.FETCH_USER,workerSaga)
}

export default wacherSaga
