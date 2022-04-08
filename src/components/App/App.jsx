import React from "react";
import './App.scss'
import Searchbar from '../Searchbar/Searchbar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Modal from '../Modal/Modal'



class App extends React.Component { 
  state = {
    showModal: false
  }
  
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    return (
      <div className='app'>
        <Searchbar />
        <ImageGallery />
        <button type='button' onClick={this.toggleModal }>Открыть модальное окно</button>
        {this.state.showModal &&
          <Modal onClick={ this.toggleModal } / >
        }
        
      </div>
    )
  }
}

export default App

