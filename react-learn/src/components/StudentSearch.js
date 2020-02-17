
import React from 'react'
import StudentSearchBar from './StudentSearchBar'
import { connect } from 'react-redux'
import { change as changeCondition } from '../store/action/student/searchCondition'
import { fetchStudents } from '../store/action/student/searchResult'
import StudentTable from './StudentTable'
import Pager from './common/Pager/Pager.js'
import Loading from './Loading.js'
import store from '../store'

//连接 StudentSearchBar
let mapStateToProps = state => ({
        key:state.students.searchCondition.key,
        sex:state.students.searchCondition.sex
})

let mapDispatchToProps = dispatch => ({
    onSearch:(newCondition) => {
        newCondition = {
            ...newCondition,
            page:1
        }
        //重新设置条件
        dispatch(changeCondition(newCondition));
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
})

//连接数据和处理函数之后，得到一个新的组件
const SearchBar = connect(mapStateToProps,mapDispatchToProps)(StudentSearchBar)

//连接 StudentTable
mapStateToProps = state => ({
    stus:state.students.searchResult.datas
})
const Table = connect(mapStateToProps)(StudentTable);

//连接Pager
mapStateToProps = state => ({
    current:state.students.searchCondition.page,
    total:state.students.searchResult.total,
    panelNumber:5,
    limit:state.students.searchCondition.limit,
})
mapDispatchToProps = dispatch => ({
    onPageChange:(newPage) => {
       
        //重新设置条件
        dispatch(changeCondition({
            page:newPage
        }));
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
})
const PagerTemp = connect(mapStateToProps,mapDispatchToProps)(Pager);

//连接Loading
mapStateToProps = state => ({
    show:state.students.searchResult.isLoading
})

const LoadingTemp = connect(mapStateToProps)(Loading);

export default class StudentSearch extends React.Component {

    componentDidMount() {
        store.dispatch(fetchStudents());
    }
    

    render() {
        return <>
            <SearchBar/>
            <Table />
            <PagerTemp/>
            <LoadingTemp/>
        </>
    }
}