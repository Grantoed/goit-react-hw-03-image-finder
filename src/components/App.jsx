import { Component } from 'react';
import { getImages } from './PixabayApi';
import { loadMore } from './PixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    this.setState({ isLoading: true });
    getImages(searchQuery).then(result =>
      this.setState({
        images: [...result],
        isLoading: false,
      })
    );
  };

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    loadMore().then(result => {
      if (result.length === 0) {
        alert('You have reached the end of the list');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...result],
        isLoading: false,
      }));
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit}></Searchbar>
        <Gallery
          images={images}
          isLoading={isLoading}
          handleLoadMore={this.handleLoadMore}
        ></Gallery>
      </>
    );
  }
}
