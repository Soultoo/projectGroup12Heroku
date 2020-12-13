import React from "react";
import { Gallery } from 'react-grid-gallery';
import usePromise from "../api/usePromise";
import { getImages } from "../api/ImgurSource";
import promiseNoData from "../api/promiseNoData";
import { useSelector, useDispatch } from 'react-redux';
import { setImagePromise } from "../redux-model/actions";

export const Images =()=>{
/*
    let images = [];
    album.images.forEach(image => {
        images = [...images, {src: image.link, thumbnail: image.link}];
    });
return <div class="albumcontainer">
    <Gallery images={images} enableLightBox = {false}/>
</div>;
*/

    const promise = useSelector(state => state.imagePromise);
    const [data, error] = usePromise(promise);

    //how to get it to fetch images?
    
    console.log(data);
return <React.Fragment>{promiseNoData(promise, data, error) || <p>Image gallery placeholder</p>}</React.Fragment>

}

 