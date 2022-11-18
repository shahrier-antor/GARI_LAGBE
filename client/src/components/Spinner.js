import React from 'react'
import { Spin } from 'antd'
// spinner loaded from antd when loading will be going on , an spinner will be shown!!
function Spinner() {
    return (
        <div className="spinner">
            <Spin size='large'/>
        </div>
    )
}

export default Spinner
