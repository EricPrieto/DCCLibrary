import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "Cant Hurt Me", author: "David Goggins"},
            {title: "Disciplin Equals Freedom", author: "Jocko Wilink"},
            {title: "Ready Player One", author: "DErnest Cline"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*Button here to move the previous book viewed*/}
                    </div>
                    <div className="col-md-4">
                         {/*Display book wtih cover here*/}
                         <h1>{this.books[this.state.bookNumber].title}</h1>
                         <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button here to move the previous book viewer*/}
                    </div>         
                </div>
            
            </div>
        )
    }
}

export default App;