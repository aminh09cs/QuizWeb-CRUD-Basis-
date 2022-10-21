import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { DiReact } from 'react-icons/di'
import { TbDashboard } from 'react-icons/tb'
import { AiOutlineFire } from 'react-icons/ai'

const SideBar = (props) => {
    const { collapsed } = props;
    return (
        <>
            <ProSidebar
                //collapsed={collapsed}
                className={collapsed ? 'collapsed' : ''}
            >
                <SidebarHeader>
                    <div
                        style={{
                            textAlign: 'center',
                            letterSpacing: '2px',
                            padding: '20px'

                        }}
                    >
                        <DiReact
                            style={{
                                color: 'red',
                                fontSize: '30px',
                                color: '#00bfff'
                            }}
                        />
                        <span>MENU</span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem
                            icon={<TbDashboard />}
                        >
                            Dashboard
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <SubMenu
                            icon={<AiOutlineFire />}
                            title={"Challenge"}
                        >
                            <MenuItem>Users</MenuItem>
                            <MenuItem>Quiz</MenuItem>
                            <MenuItem>Question</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter
                    style={{
                        textAlign: 'center',
                        letterSpacing: '1px',
                        padding: '10px'

                    }}
                >
                    <span>&#169; CONTACT</span>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}
export default SideBar;