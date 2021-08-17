import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUsers } from '../../redux/actions';
import { Slide } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './users.css'

const Users = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    const data = useSelector(state => state.users);
    console.log(data)
    return (
        <div className="row">
          <h1>User</h1>

            {data.map((v, i) => <div className="col-md-4 main">
              <Slide className="p-4  mt-2 main1 h-99  ">
              <div className="user ">
                {/* <img className="image center" alt=""  src={v.img} height="70" width="70"/> */}
                <p className="name">{v.name}</p>

                <h5 className="h1name">{v.username}</h5>
                <div className="div">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <p href="#" className="text-center">{v.email}</p>
                </div>


              </div>
            </Slide>
             </div>)}

        </div>
    )
}

export default Users