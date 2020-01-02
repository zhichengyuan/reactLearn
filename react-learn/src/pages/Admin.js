import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Welcome from './Welcome'
import StudentAdd from './student/StudentAdd'
import StudentList from './student/StudentList'
import CourseAdd from './courses/CourseAdd'
import CourseList from './courses/CourseList'
import {Route,Switch} from 'react-router-dom'
import StudentDetail from './student/StudentDetail'

export default function Admin() {
    return (
        <Layout
            header={<Header></Header>}
            aside={<Menu/>}
        >
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/students" exact component={StudentList}/>
                <Route path="/students/add" exact component={StudentAdd}/>
                <Route path="/students/:sno" exact component={StudentDetail}/>
                <Route path="/courses" exact component={CourseAdd}/>
                <Route path="/courses/add" exact component={CourseList}/>
            </Switch>
            
        </Layout>
    )
}
