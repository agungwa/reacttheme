import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "./../logo.svg";
import "./../App.css";

export default class Home extends Component {
    state = {
        home: [],
        isLoaded: false
    }

    componentDidMount(){
        return fetch('/wp-json/wp/v2/posts')
        .then((response) => response.json())
        .then((responseJson)=>{
            this.setState({ home: responseJson, 
                isLoaded: true});
        })
        .catch((error) => {
            console.error(error);
        });
    }


    render() {
     console.log(this.state);
     const { home, isLoaded } = this.state;
     if(isLoaded){
        return(
            <div className="App">
              <header className="App-header">
                  <p>Postingan</p>
              <img src={logo} className="App-logo" alt="logo" />
                    { home.map(home => (
                                <h4 key={home.id}>{ home.title.rendered }</h4>
                            )) }
                </header>
            </div>
        );
    }
        return <h3>  Loading</h3>

     }
    
}
