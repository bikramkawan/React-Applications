/**
 * Created by bikramkawan on 8/30/17.
 */
import React from 'react';

const Profile = ({artist}) => {

    let artistDetails = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
    artistDetails = artist !== null ? artist : artistDetails;
    return (
        <div className="profile">
            <img alt="Profile" className="profile-img" src={artistDetails.images[0].url}></img>
            <div className="profile-info">
                <div className="profile-name">{artistDetails.name}</div>
                <div className="profile-followers">{artistDetails.followers.total} followers</div>
                <div className="profile-genres">
                    {artistDetails.genres.map((genre, index)=> {
                        genre = genre !== artistDetails.genres[artistDetails.genres.length - 1] ? ` ${genre},` : ` & ${genre}`
                        return (<span key={index} className="genre">{genre}</span>)
                    })}
                </div>
            </div>
        </div>

    )

}

export  default Profile;