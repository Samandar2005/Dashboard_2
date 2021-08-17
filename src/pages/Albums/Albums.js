import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAlbums } from '../../redux/actions';
import { Slide } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';

const Albums = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch);
    }, [])

    const data = useSelector(state => state.albums);
    console.log(data)
    return (
        <div className="row">
            {data.map((v, i) => <div className="col-md-4 mt-3 main">
              <Slide className="p-3  mt-2 main1 h-100  ">
              <div className="user ">
                <p className="name">{v.title}</p>
              </div>
            </Slide>
             </div>)}

        </div>

    )
}

export default Albums