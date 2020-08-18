import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class HomeItem extends Component {
    state = {
        imgUrl: '',
        author: '',
        isLoaded: false,
    }
    static propType = {
        home : PropTypes.object.isRequired
    }

    componentDidMount(){
        const { featured_media, author } = this.props.home;
        
        console.log({author})
        const getImageUrl = axios.get('/wp-json/wp/v2/media/',{featured_media});
        const getAuthor = axios.get('/wp-json/wp/v2/users/',{author});

        Promise.all([getImageUrl, getAuthor])
        .then(res => {
        //    console.log(res[1]);
            this.setState({
                imgUrl: res[0].data.media_details.sizes.thumbnail.source_url,
                author: res[1].data.name,
                isLoaded: true
            });
            
        });
    }
    render() {
        const { title, excerpt} = this.props.home;
        // const { author, imgUrl, isLoaded } = this.state;
        
        return (
            // console.log(imgUrl),
            <div>
                <h2 style={{ marginBottom: '0' }}>{ title.rendered}</h2>
               
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            </div>
        );
      
    }
}
