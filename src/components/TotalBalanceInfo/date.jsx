import React from 'react';

export default class App extends React.Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const date = new Date().toDateString();
    this.setState({ date });
  };
  // getDate() {
  //   var date = { currentTime: new Date().toLocaleString() };

  //   this.setState({
  //     date: date
  //   });
  // }

  render() {
    return <div>{date}</div>;
  }
}
