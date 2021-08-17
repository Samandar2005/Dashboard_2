import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPhotos } from '../../redux/actions';
import { Slide } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotosWraper from './PhotosWraper'

const Photos = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    const data = useSelector(state => state.photos);
    console.log(data)
    return (
      <PhotosWraper>
        <div className="row">
          <h1>Photos</h1>
            {data.map((v, i) => <div className="col-md-4 mt-3  main">
              <Slide className="p-4 h-100 mt-2 main1 ">
              <div className="user ">
                <p className="name">{v.title}</p>
                <a href={v.thumbnailUrl}>
                <img className="center" src={v.url} alt="" width="100" height="100" />
                </a>



              </div>
            </Slide>
             </div>)}

        </div>
      </PhotosWraper>

    )
}

export default Photos;