import { createStore,bindActionCreators} from '../redux'
import reducer from './reducer'
import { createAddUserAction} from './action/userAction'


const store = createStore(reducer);//创建store仓库



const addUsers = bindActionCreators(createAddUserAction,store.dispatch);

store.subscribe(() => {
    console.log('监听器',store.getState());
})

addUsers({id:3,name:'sss',age:19});
addUsers({id:4,name:'sss',age:19});











