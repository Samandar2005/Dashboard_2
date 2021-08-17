import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper'
import logo from "../../logo.svg"
import { Button, List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions'
import { faBars, faHome, faImages, faNewspaper, faTasks, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-awesome-reveal'

const menus = [
    { to: "home", title: "Home", icon: faHome },
    { to: "users", title: "Users", icon: faUsers },
    { to: "todos", title: "Todos", icon: faTasks },
    { to: "albums", title: "Albums", icon: faVideo },
    { to: "photos", title: "Photos", icon: faImages },
    { to: "posts", title: "Posts", icon: faNewspaper },
]

const Dashboard = ({ children }) => {
    const dispatch = useDispatch();
    const { menu } = useParams();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper>
             <div className={`sidebar ${show && "show" || ""}`}>
                <h1 className="text-white">Sidebar</h1>
                    <List component="nav">
                        {menus.map((v, i) => <li>
                            <Slide delay={i * 30}>
                                <Link key={v.to} to={`/dashboard/${v.to}`}
                                className={`${menu === v.to ? "active" : ""}`}>
                                    <ListItem button >
                                        <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                                    </ListItem>
                                </Link>
                            </Slide>
                        </li>)}
                        </List>
            </div>
            <div className="rightside">
                <header className="shadow">
                    <Button onClick={() => toggleMenu(dispatch)} variant="contained" disableElevation >
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard
