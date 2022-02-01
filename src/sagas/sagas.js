import {call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { setCount,Increment } from '../features/sagaExSlice'

const getCount = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await res.json()
    return result[Math.floor(Math.random()*11)].id
}

function* fetchId(){
    const Id = yield getCount();
    console.log(Id);
    yield put(setCount(Id));
}

function* IncrementId(){
    yield put(Increment());
}

function* mySaga(){
    yield delay(2000)
    yield fetchId();
    yield delay(2000)
    yield IncrementId()
    console.log(getCount);
}

export default mySaga