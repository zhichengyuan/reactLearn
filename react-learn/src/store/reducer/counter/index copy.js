import {increase} from "../../action/counter"
import { handleAction } from 'redux-actions'
// export default function (state = 10,{type,payload}) {
//     switch (type) {
//         case actionTypes.increase:
//             return state + 1;
//         case actionTypes.decrease:
//             return state - 1;
//         case actionTypes.add:
//             return state + payload;
//         default:
//             return state;
//     }
// }
window.increaseCreator = increase;
const reducer = handleAction(increase,(state,action) => {
    return state + 1;
},5)

export default reducer;