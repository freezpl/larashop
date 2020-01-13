import React from 'react'
import './dashboard.css'
import LeftExpander from './ui/LeftExpander/LeftExpander'

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard">
                <LeftExpander />
                <div>
                    {children}
                </div>
        </div>
    );
}

export default DashboardLayout;