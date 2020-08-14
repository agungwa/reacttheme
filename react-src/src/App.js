import React, { Component } from "react";
import Home from './components/Home';


class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data:[]
    //     }
    // }

    // componentDidMount(){
    //     return fetch('/wp-json/wp/v2/posts')
    //     .then((response) => response.json())
    //     .then((responseJson)=>{
    //         this.setState({ data: responseJson });
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }

    // render(){
    //     return(
    //         <div className="App">
    //             <header className="App-header">
    //                         <img src={logo} className="App-logo" alt="logo" />
    //                         <h1 className="App-title">
    //                             {this.state.data.map((item, i) => (<p key={i}>{item.title.rendered}</p>))}
    //                         </h1>
    //             </header>
    //         </div>
    //     );
    // }
    render(){
        return (
            <div className="App">
                <Home />
            </div>
        );
    }


}

export default App;
