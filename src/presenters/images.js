import React from "react";
//import { Gallery } from 'react-grid-gallery';
import usePromise from "../api/usePromise";
import { getImages } from "../api/ImgurSource";
import promiseNoData from "../api/promiseNoData";
import { useSelector, useDispatch } from 'react-redux';
import { setImagePromise } from "../redux-model/actions";

export const Images =(promise)=>{

    const[data, error]=usePromise(promise);
    console.log(data);
return <React.Fragment>{promiseNoData(promise, data, error) || <p>Image gallery placeholder</p>}</React.Fragment>

}

 