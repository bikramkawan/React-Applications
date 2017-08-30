/**
 * Created by bikramkawan on 8/30/17.
 */
import React  from 'react';

const Albums = ({albums}) => {
    if (!Array.isArray(albums)) return (<div></div>)

    return (<div>
        {albums.map((item, i)=> {
            const albumImage = item.images[0].url;
            return <div key={i} className="album">
                <a href={item.external_urls.spotify} target="_blank">
                    <img src={albumImage} alt='no' className="album-img"/>
                    <p className="album-name">
                        {item.name}
                    </p>
                </a>
            </div>
        })}
    </div>)


}

export default Albums;