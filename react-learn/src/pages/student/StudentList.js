import React from 'react'
import StudentSearchBar from '../../components/StudentSearchBar'

export default function StudentList() {

    
    return (
        <div>
            <StudentSearchBar defaultValue={{
                key:'黑',
                sex:-1
            }}></StudentSearchBar>
        </div>
    )
}
