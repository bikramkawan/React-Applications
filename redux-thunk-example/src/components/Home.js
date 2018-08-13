import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos, helloAction, getPosts } from '../actions/index';
import Loader from './Loader';

class Home extends Component {
    componentWillMount() {
        console.log(this.props);
        this.props.getPhotos();
        this.props.helloAction();
        this.props.getPosts();
    }

    render() {
        return (
            <div className="App">
                {this.props.loading && <Loader />}
                {!this.props.loading && (
                    <div> The fetch is completely successful </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getPhotos, helloAction, getPosts })(
    Home,
);
