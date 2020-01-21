import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
//import Register from './components/Register/Register'
import Routes from './routes';
class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "WELCOME",
      home: false
    }
  }  

  render() {
    return (
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div className="off-canvas-content" data-off-canvas-content>
                <Header name={this.state.appName}/>
                <Routes name={this.state.appName}/>
            </div>
          </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

