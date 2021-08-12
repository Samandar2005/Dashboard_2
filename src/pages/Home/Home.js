
import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import Dashboard from '../../containers/Dashboard'
import HomeWrapper from './HomeWrapper'

const Home = () => {

    return (

        <HomeWrapper>
            <h1>Cards</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Todos</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Albums</h2>
                    </Slide>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home
