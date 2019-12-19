import React from 'react'
import PropTypes from 'prop-types'

/**
 * 学生列表组件
 */
export default function StudentList({ page }) {
    return (
        <div>

        </div>
    )
}

StudentList.defaultProps = {
    page:1
}

StudentList.propTypes = {
    page:PropTypes.number.isRequired
}