import React from 'react'
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import Home from '../Home';
import Todos from '../Todos';
import Users from '../users'
import Albums from '../Albums'
import Posts from '../Posts'
import Photos from '../Photos';

const Dashboards = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboard>
            {menu === "home" && <Home /> || ""}
            {menu === "todos" && <Todos /> || ""}
            {menu === "users" && <Users /> || ""}
            {menu === "albums" && <Albums /> || ""}
            {menu === "posts" && <Posts /> || ""}
            {menu === "photos" && <Photos /> || ""}

        </Dashboard>
    )
}

export default Dashboards;
