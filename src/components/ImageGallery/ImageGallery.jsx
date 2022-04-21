import React from "react";
import './ImageGallery.scss'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import fetchImage from '../../services/fetchImage'
import Modal from '../Modal/Modal'

export default class ImageGallery extends React.Component {
    state = {
        data: null,
        error: null,
        status: 'idle',
        showModal: false,
        modalLargeImg: ''
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName
        const currentName = this.props.imageName

        if (prevName !== currentName) {
            console.log('Изменилось название изображения')
            // console.log(`Предыдущее имя: ${prevName}`)
            // console.log(`Текущее имя: ${currentName}`)

            this.setState({ status: 'pending' })
            
            
            fetchImage
                .fetchAPI(currentName)
                .then(data => this.setState({ data, status: 'resolved' }))
                .catch(error=> this.setState({error, status: 'rejected'}))
                    
        }
        console.log(this.state.data)
    }

    toggleModalOpen = (largeImageURL) => {
        this.setState({ showModal: true, modalLargeImg: largeImageURL }) 
    }

    toggleModalClose = () => {
         this.setState({ showModal: false}) 
    }
    

    render() {
        const { data, status, modalLargeImg } = this.state
        const { imageName } = this.props

        if (this.state.showModal === true) {
            return  (<Modal
                onClose={this.toggleModalClose}
                onClick={this.toggleModalOpen}
                onClickBackDrop={this.toggleModalClose}
                alt={imageName}
                largeImageURL={modalLargeImg}
                    />)
            
        }

        if (status === "idle") {
            return <h1>Введите название изображения</h1>
        }

        if (status === "pending") {
            return <p>Загружаем...</p>
        }

        if (data.total === 0) {
            return <h1>Ошибка, изображение <span className="errorImg">{imageName}</span> не найдено</h1>
        }

        if (status === "resolved") {
            return  <ul className="imageGallery">
                        {
                            data && data.hits.map(hit =>
                            <ImageGalleryItem key={hit.id} onClick={this.toggleModalOpen} pageURL={hit.webformatURL} largeImageURL={hit.largeImageURL} alt={imageName} onShowModal={this.toggleModalOpen} />)
                        }
                    </ul>   
        }

        
    }
};