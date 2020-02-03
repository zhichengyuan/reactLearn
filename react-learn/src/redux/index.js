import { createStore} from 'redux'
import reducer from './reducer'
import { createAddUserAction } from './action/userAction'
import uuid from 'uuid'

const store = createStore(reducer);//创建store仓库

console.log(store.getState());

store.dispatch(createAddUserAction({
    id:uuid(),
    name:'abc',
    age:18
}));
console.log(store.getState());
