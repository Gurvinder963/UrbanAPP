import { CREATE_FOOD_ITEM } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../baseApi'
import * as CreateFoodActions from './Actions'

function* createFoodData(action) {
  console.log("createFoodData with action called");
  try {
 
    const response = yield call(API.get, 'public/api/v1/books', action.payload)
    yield put(CreateFoodActions.createFoodItemSuccess(response))
  } catch (e) {
    console.log("createFoodData with action error");
    yield put(CreateFoodActions.createFoodItemError(e.message))
  }
}

export default function* root() {
  console.log("in root create food")
  yield [yield takeLatest(CREATE_FOOD_ITEM, createFoodData)]
}
