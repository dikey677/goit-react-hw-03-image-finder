import React from "react";
import './ImageGalleryItem.scss'

export default class ImageGalleryItem extends React.Component { 
    state = {
        image: { }
    }

    componentDidMount() {
        fetch('https://pixabay.com/api/?q=cat&page=1&key=25578866-eab48f26650f3d339fe2e0163&image_type=photo&orientation=horizontal&per_page=12')
            .then(res => res.json())
            .then(image => this.setState({ image }))
        console.log( this.state.image)
    }
    
     
    render() {
      
    return (
        <li className="ImageGalleryItem">
            
            <img className='imageGalleryItem-image' src="" alt="" />
        </li>
    )
  }
}