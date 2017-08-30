/**
 * Created by bikramkawan on 8/29/17.
 */
import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Profile from './Profile'
import axios from 'axios';
import Albums from './Albums'
export  default  class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            albums: ''
        }
    }


    search = ()=> {

        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/'
        var accessToken = 'BQDVLs7oZv-RhlJ31506vxUUtqj7RBQUhIUi0lHdSs6P-XngENYN32nUtkACk77nm0_3gRP2wieSR2gbfkeK63OGTOlf5-O0gmmMEfyHFSu4_Ai2oJgzt9Hh6_hsoQjt-gwsanlEABMItEtbNXTdiUurDsHGOZhitX7yiuDgOoY5k7g887yDmDyvYViTtckRgzMz5keDBRlXLbvOWLPHvb5HnvivXb5QRFxy2_Eps7Zi-nEi7GMtA4PcWTgXfWsFYJX3Bsy4isTlKNseomFRQXc7AVDbo3M5tY1mMFnztVXMbMd4a-vcRjYRhSIwSaMiOls'
        var headerOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        axios.get(FETCH_URL, headerOptions)
            .then(({data}) => {
                const artist = data.artists.items[0];
                this.setState({artist});
                FETCH_URL = `${ALBUM_URL}${artist.id}/albums`
                axios.get(FETCH_URL, headerOptions)
                    .then(({data})=> {
                        const {items} = data;
                        this.setState({albums: items})

                    })

            })


    }

    render() {

        return (<div className="App">
            <div className="App-title">Album Search</div>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text"
                                 placeholder='Search for an Artist'
                                 value={this.state.query}
                                 onChange={({target})=> this.setState({query: target.value})}
                                 onKeyPress={({key})=> key === 'Enter' ? this.search() : ''}
                    />
                    <InputGroup.Addon onClick={this.search}>
                        <Glyphicon glyph='search'/>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
            {
                this.state.artist !== null ?
                    <div><Profile
                        artist={this.state.artist}
                    />
                        <Albums albums={this.state.albums}/>
                    </div>
                    : ''
            }


        </div>);
    }


}
