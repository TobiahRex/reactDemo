const Root = React.createClass({
  getInitialState(){
    return {
      counters: { counter1: 0, counter2: 0 },
      time: 0,
      timerID: 0,
    };
  },
  addCount(event){
    evenet.persist()
    console.log(event.target.id);
  },
  minusCount(){
    if (this.state.count > 0) this.setState({ count: this.state.count -= 1 })
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
  render(){
    return (
      <div>
      <h1>Hello from Root Component</h1>
      <p>Lets count some stuff!</p>
      <h3>Counter 1: { this.state.counters.counter1 }</h3>
      <button onClick={ this.addCount }>+</button>
      <button onClick={ this.minusCount }>-</button>

      <h3>Counter 2: { this.state.counters.counter2 }</h3>
      <button onClick={ this.addCount }>+</button>
      <button onClick={ this.minusCount }>-</button>

      <h1>{ this.state.time }</h1>
      <button onClick={ this.toggleTimer }>{ this.state.timerID ? 'STOP' : 'START' }</button>
      {/*<button onClick={ this.stopTimer }>STOP</button>*/}
      <button onClick={ this.resetTimer }>RESET</button>
      </div>
    );
  }
});

ReactDOM.render(
  // React.createElement('h1', null, 'toby')
  <Root/>,
  document.getElementById('root')
)


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
