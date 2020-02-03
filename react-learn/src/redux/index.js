import { createStore} from 'redux'
import reducer from './reducer'
import { createAddUserAction,createDeleteUserAction } from './action/userAction'
import uuid from 'uuid'

const store = createStore(reducer);//创建store仓库

console.log(store);

const unListen = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(createAddUserAction({
    id:3,
    name:'abc',
    age:18
}));

unListen();//取消监听

store.dispatch(createDeleteUserAction(3));
