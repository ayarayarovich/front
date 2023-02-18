import {Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import {Link, Outlet} from "react-router-dom";
import {Close as CloseIcon, AccountCircle as AccountCircleIcon} from "@mui/icons-material";
import './App.scss'

function App() {
    const { collapseSidebar } = useProSidebar()

    return (
        <div className="App" style={{display: 'flex', height: '100%'}}>
            <Sidebar>
                <Menu menuItemStyles={{
                    root: ({ level, active, disabled }) => {
                        return {
                            backgroundColor: 'pink'
                        }
                    },
                }}>
                    <MenuItem icon={<AccountCircleIcon/>}></MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}><CloseIcon/></button>
                <Outlet/>
            </main>
        </div>
    )
}

export default App
