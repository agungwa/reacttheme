import React, { Component } from "react"
import HomeItem from './HomeItem'
import logo from "./../logo.svg"
import "./css/home.css"

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
     const { home, isLoaded } = this.state;
     if(isLoaded){
        return(
            <div className="App">
              <header className="App-header">
                  <p>Postingan</p>
              <img src={logo } className="App-logo" alt="logo" />
                    { home.map(home => (
                                <HomeItem key={ home.id } home={home}/>
                                
                            )) }
                </header>
            </div>
        );
    }
        return <h3>  Loading</h3>

     }
    
}
