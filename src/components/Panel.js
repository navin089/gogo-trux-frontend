import React, { useContext } from 'react';
import "./Panel.css"
import { PanelContext } from '../PanelContext';
import User from './User';
import Driver from './Driver';
import Dashboard from './Dashboard';

function Panel() {
    const {item, setItem} = useContext(PanelContext);

    const loadComponent = () =>{
        switch (item) {
            case "User":
              return <User />;
            case "Partners":
              return <Driver />;   
            case "Dashboard":
                return <Dashboard />;
            default:
                return <Dashboard />;    {/* Dashboard*/}
          }
    }
    
    return (
        <div className="panel">
            <div className="panel__container">
                {
                    loadComponent()
                }
            </div>
        </div>
    )
}

export default Panel;


