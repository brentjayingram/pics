import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization: 'Client-ID 7071c5aa337b7f1f3604ce12f9e1f451abde0970eb60e5189a2a802ddc2f1384' 
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App