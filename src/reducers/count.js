// Actionのタイプを取り込む
import { INCREMENT, DECREMENT } from '../actions'

// 初期状態のオブジェクト
const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      // stateをインクリメントしたものをオブジェクトとしてかえす
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  } 
} 

