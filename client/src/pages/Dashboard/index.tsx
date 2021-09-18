import React from 'react'
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import './dashboard.css';

function index() {
    return (
        <div className="dashboardContainer">
            <Header />
            <Main />
        </div>
    )
}

export default index
