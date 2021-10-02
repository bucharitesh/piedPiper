
import React from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <Header />
            <div className="dashboardContent">
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default Dashboard
