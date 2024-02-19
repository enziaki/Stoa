import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './css/Sidebar.css'

function SideBar() {
    return (
        <div className="Sidebar">
            <Sidebar>
                <Menu>
                    <MenuItem>Article 1</MenuItem>
                    <MenuItem>Article 2</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar
