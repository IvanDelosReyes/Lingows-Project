import React, { Component } from 'react';
import logo from './LingowsIcon.png';
import './App.css';

class App extends Component {

  state = {
    text: {
      name: '',
      phoneNumber: '',
      email: '',
      textmessage: ''
    }
  }

sendText = _ => {
  const { text } = this.state
  //pass variables within the query string
  fetch(`http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}&name=${text.name}&phoneNumber=${text.phoneNumber}&email=${text.email}`)
  .catch(err => console.error(err))
}

render() {

const { text } = this.state;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-tittle">Send us a message!</h3>
      </header>
<div className="container" style={{ }}>
  <p>Enter your information, and we will text you shortly.</p>

  <form method="post" action="/send-text">

  <div className="txt-input">
  <label className="label"> Name: </label>
  <input placeholder="Name:" value={text.name} onChange={e => this.setState({ text: { ...text, name: e.target.value } })}/>
  </div>

  <div className="txt-input">
  <label className="label"> Phone Number: </label>
  <input placeholder="Phone Number:" value={text.phoneNumber} onChange={e => this.setState({ text: { ...text, phoneNumber: e.target.value } })}/>
  </div>

  <div className="txt-input">
  <label className="label"> Email: </label>
  <input placeholder="Email:" value={text.email} onChange={e => this.setState({ text: { ...text, email: e.target.value } })}/>
  </div>

  <div className="txt-input">
  <label className="label"> Message: </label>
  <textarea placeholder="Message:" rows={3} value={text.textmessage} onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })}/>
  </div>
  </form>

  <button className="button" type="submit" value="send" onClick={this.sendText}> Send Text </button>
</div>
    </div>
  );
}
}

export default App;
