import React from "react";
import './ImageGallery.scss'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default class ImageGallery extends React.Component {

    state = {
        data: null,
        loading: false
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName
        const currentName = this.props.imageName

        if (prevName !== currentName) {
            console.log('Изменилось имя изображения')
            console.log(`Предыдущее имя: ${prevName}`)
            console.log(`Текущее имя: ${currentName}`)

            this.setState({loading: true})
            setTimeout(() => {
                fetch(`https://pixabay.com/api/?q=${currentName}&page=1&key=25578866-eab48f26650f3d339fe2e0163&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(data => this.setState({ data }))
                .finally(() => this.setState({ loading: false }))
            }, 750) 
        }
        console.log(this.state.data.hits)
    }
    

    render() {
        const { data, loading } = this.state
        const { imageName } = this.props
        return (
            <div>
                {loading && <p>Загружаем...</p>}
                {!imageName && <h1>Введите название изображения</h1>}
                <ul className="imageGallery">
                    {data && data.hits.map(hit => <ImageGalleryItem key={hit.id} pageURL={hit.webformatURL} largeImageURL={hit.largeImageURL} alt={imageName}></ImageGalleryItem>)}
                </ul>
            </div>
    )
    }
};


// return fetch('https://pixabay.com/api/?q=cat&page=1&key=25578866-eab48f26650f3d339fe2e0163&image_type=photo&orientation=horizontal&per_page=12')
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                 }
                    
//                     return Promise.reject(
//                     new Error(`Изображение с именем ${nextName} не найдено`)
//                 )    
//             })