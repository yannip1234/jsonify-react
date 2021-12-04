import logo from './logo.svg';
import React from 'react';

import './App.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <h2>Code:</h2>
                <textarea value={this.state.value} onChange={this.handleChange} rows="25" cols="100"/>
                <h2>JSONified:</h2>
                <textarea value={JSON.stringify(this.state.value) || ""} rows="25" cols="100"/>

            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <script>{`var textareas = document.getElementsByTagName('textarea');
            textareas.onkeydown = function(e){
              if(e.keyCode==9 || e.which==9){
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s+1;
              }
            }
          }`}</script>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <NameForm/>
            </header>
        </div>
    );
}

export default App;
