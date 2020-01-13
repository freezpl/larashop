import React from 'react'
import './auth_layout.css'

const AppLayout = ({ children }) => {
    return (
        <div className="auth_layout">
            <div className="auth_overlay row justify-content-center h-100">
                <div className="col-md-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AppLayout;