import React from "react";
import './ImageGalleryItem.scss'

export default class ImageGalleryItem extends React.Component { 
    

    render() {
        const { pageURL, alt} = this.props

    return (
        <li className="ImageGalleryItem">
            <img  className='imageGalleryItem-image' src={pageURL} alt={alt} />
        </li>
    )
  }
}


  