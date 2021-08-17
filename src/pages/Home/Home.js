
import React from 'react'
import HomeWraper from './HomeWraper'
import { Slide } from "react-awesome-reveal";
import { faAngular, faSpeakap, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons'
import { ListItem } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { faHome, faImages, faNewspaper, faTasks, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';

const menus = [
    { to: "home", title: "Home", icon:  faHome},
    { to: "users", title: "Users", icon: faUsers },
    { to: "todos", title: "Todos", icon: faTasks },
    { to: "albums", title: "Albums", icon: faVideo},
    { to: "photos", title: "Pohotos", icon: faImages },
    { to: "posts", title: "Posts", icon: faNewspaper },
]
const Home = ({ children }) => {
    const dispatch = useDispatch();
    const { menu } = useParams();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <HomeWraper>
            <div className="row">
            <h1>HOME</h1>

            {menus.map((v, i) => <div className="col-md-4 main mb-3 ">
                <Slide delay={i * 30}>
                    <Link key={v.to} to={`/dashboard/${v.to}`}>
                    <ListItem button className="main1 fw-bold" >
                    <FontAwesomeIcon icon={v.icon} className="me-2 " />
                    <div>
                    {v.title}
                    </div>
                    </ListItem>
                    </Link>
                </Slide>
            </div>)}
      </div>
        </HomeWraper>


    )
}

export default Home;
