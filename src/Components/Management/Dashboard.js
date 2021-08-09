import React from 'react'
import Adminprofile from './Adminprofile'
import Sendmail from './Sendmail'

const Dashboard = () => {
    return (
        <div>
            <div className="dashboardinfo">
                <Adminprofile />
                <Sendmail />
            </div>
        </div>
    )
}

export default Dashboard
