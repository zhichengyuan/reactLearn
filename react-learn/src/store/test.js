import store from './index'
import { fetchUsers } from './action/userAction'

store.dispatch(fetchUsers());

