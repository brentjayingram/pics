import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import {Helmet} from 'react-helmet';


class App extends React.Component {
    state = { images: [] };

  onSearchSubmit= async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: {query: term }
        });

        this.setState({ images: response.data.results });
    }

    render(){
        return (
            <div className="application"  >
                <Helmet>
                    <style>{'body { background-color: #1d1e21; }'}</style>
                </Helmet>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images={this.state.images} />
                </div>
            </div>

        );
    }
}

export default App