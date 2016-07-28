const Welcome = React.createClass({
  render(){
    const { greeting, info } = this.props;
    return (
      <span>
      <h1>{greeting}, {info}</h1>
      <p>Lets count some stuff!</p>
      </span>
    )
  }
});
const Counter = React.createClass({
  render(){
    const { addCount, minusCount, count, number } = this.props;
    return (
      <span>
      <h3>Counter { number }: { count }</h3>
      <button onClick={ addCount }>+</button>
      <button onClick={ minusCount }>-</button>
      </span>
    )
  },
});
const MessageForm = React.createClass({
  getInitialState(){
    return { message: '' }
  },
  onAddMessage(){
    let { addMessage } = this.props;
    addMessage(this.state.message);
    this.setState({ message: '' });
  },
  render(){
    return (<div>
    <input type="text" value={ this.state.message } onChange={ (e) => this.setState({ message: e.target.value }) }/>
    <button onClick={ this.onAddMessage }>Add Message</button>
    </div>)
  }
});
const Message = React.createClass({
  render(){
    let { message, id, deleteMessage } = this.props;
    return (
      <li>
      <p>{ message } <button onClick={ () => deleteMessage(id) }>DELETE</button></p>

      </li>
    )
  }
});
const Root = React.createClass({
  getInitialState(){
    return {
      count: 0,
      time: 0,
      timerID: 0,
      messages: [],
    }
  },
  addCount(){
    this.setState({ count: this.state.count+=1 });
  },
  minusCount(arg, event){
    if (this.state.count > 0) {
      this.setState({ count: this.state.count-=1 });
    }
  },
  startTimer(){
    if(!this.state.timerID){
      let startInterID = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
      this.setState({ timerID: startInterID });
    }
  },
  stopTimer(){
    clearInterval(this.state.timerID);
    this.setState({ timerID: 0 });
  },
  resetTimer(){
    clearInterval(this.state.timerID);
    this.setState({ timerID: 0, time: 0 });
  },
  toggleTimer(){
    if (!this.state.timerID) {
      this.startTimer()
    } else {
      this.stopTimer()
    }
  },
  addMessage(message) {
    let newMessage = { message, id: uuid(), deleteMessage: this.deleteMessage };
    let messages = this.state.messages.concat(newMessage);
    this.setState({ messages });
  },
  deleteMessage(id) {
    console.log('id: ', id);
    let messages = this.state.messages.filter(msgObj => msgObj.id !== id);
    this.setState({ messages });
  },
  render(){
    let welcomeMsg = {
      greeting: 'Hello world',
      info: 'My name is Toby.',
    }
    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      count: this.state.count,
    }
    let messages = this.state.messages.map((messageObj) => {
      return <Message key={ messageObj.id } {...messageObj} />
    });
    return (
      <div>
      <Welcome {...welcomeMsg} />
      <MessageForm addMessage={ this.addMessage }/>

      <ul>{ messages }</ul>

      <Counter number="1" {...counterProps} />
      </div>
    )
  }
});
ReactDOM.render(
  // React.createElement('h1', null, 'toby')
  <Root/>,
  document.getElementById('root')
)
// const Counter = React.createClass({
//   getInitialState(){
//     return {
//       counters: { counter1: 0, counter2: 0 },
//       time: 0,
//       timerID: 0,
//     };
//   },
//   addCount(event){
//     event.persist()
//     console.log(event.target.id);
//
//     let counters = Object.assign({}, this.state.counters);
//     counters[event.target.id] += 1;
//     this.setState({ counters });
//   },
//   minusCount(arg, event){
//     if (this.state.counters[arg] > 0) {
//       let counters = Object.assign({}, this.state.counters);
//       counters[arg] -= 1;
//       this.setState({ counters });
//     }
//   },
//   startTimer(){
//     if(!this.state.timerID){
//       let startInterID = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
//       this.setState({ timerID: startInterID });
//     }
//   },
//   stopTimer(){
//     clearInterval(this.state.timerID);
//     this.setState({ timerID: 0 });
//   },
//   resetTimer(){
//     clearInterval(this.state.timerID);
//     this.setState({ timerID: 0, time: 0 });
//   },
//   toggleTimer(){
//     if (!this.state.timerID) {
//       this.startTimer()
//     } else {
//       this.stopTimer()
//     }
//   },
//   render(){
//     return (<span>
//       <h3>Counter 1: { this.state.counters.counter1 }</h3>
//       <button id='counter1' onClick={ this.addCount }>+</button>
//       <button onClick={ this.minusCount.bind(this, 'counter1') }>-</button>
//
//       <h3>Counter 2: { this.state.counters.counter2 }</h3>
//       <button id='counter2' onClick={ this.addCount }>+</button>
//       <button onClick={ this.minusCount.bind(this, 'counter2') }>-</button>
//
//       <h1>{ this.state.time }</h1>
//       <button onClick={ this.toggleTimer }>{ this.state.timerID ? 'STOP' : 'START' }</button>
//       {/*<button onClick={ this.stopTimer }>STOP</button>*/}
//       <button onClick={ this.resetTimer }>RESET</button>
//     </span>)
//   }
// })
//
// const Root = React.createClass({
//   render(){
//     return (
//       <div>
//         <Welcome />
//         <Counter />
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   // React.createElement('h1', null, 'toby')
//   <Root/>,
//   document.getElementById('root')
// )

// const Root = React.createClass({
//   render(){
//     return (
//       <span>
//       <h1>Hello from Root Component</h1>
//       <h3>This is an h3</h3>
//     </span>)
//   }
// })

// // const Root = React.createClass({
// //   render(){
// //     return (
// //       <span>
// //       <h1>Hello from Root Component</h1>
// //       <h3>This is an h3</h3>
// //     </span>)
// //   }
// // })
//
//
//
// const Root = React.createClass({
//   getInitialState(){
//     return {
//       counters: { counter1: 0, counter2: 0 },
//       time: 0,
//       timerID: 0,
//     };
//   },
//   addCount(){
//     return this.setState({ count: this.state.count += 1 })
//   },
//   minusCount(){
//     if (this.state.count > 0) this.setState({ count: this.state.count -= 1 })
//   },
//   startTimer(){
//     if(!this.state.timerID){
//       let startInterID = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
//       this.setState({ timerID: startInterID });
//     }
//   },
//   stopTimer(){
//     clearInterval(this.state.timerID);
//     this.setState({ timerID: 0 });
//   },
//   resetTimer(){
//     clearInterval(this.state.timerID);
//     this.setState({ timerID: 0, time: 0 });
//   },
//   toggleTimer(){
//     if (!this.state.timerID) {
//       this.startTimer()
//     } else {
//       this.stopTimer()
//     }
//   },
//   render(){
//     return (
//       <div>
//       <h1>Hello from Root Component</h1>
//       <p>Lets count some stuff!</p>
//       <h3>Counter 1: { this.state.counters.counter1 }</h3>
//       <button onClick={ this.addCount }>+</button>
//       <button onClick={ this.minusCount }>-</button>
//
//       <h3>Counter 2: { this.state.counters.counter2 }</h3>
//       <button onClick={ this.addCount }>+</button>
//       <button onClick={ this.minusCount }>-</button>
//
//       <h1>{ this.state.time }</h1>
//       <button onClick={ this.toggleTimer }>{ this.state.timerID ? 'STOP' : 'START' }</button>
//       {/*<button onClick={ this.stopTimer }>STOP</button>*/}
//       <button onClick={ this.resetTimer }>RESET</button>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   // React.createElement('h1', null, 'toby')
//   <Root/>,
//   document.getElementById('root')
// )
