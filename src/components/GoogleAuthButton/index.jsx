import React, { Component } from 'react';
import styles from './GoogleButton.module.css';
import GoogleAuthNotification from '../GoogleAuthNotification';

export default class GoogleButton extends Component {
  state = {
    clicked: false,
  };

  removeNotification = () => {
    setTimeout(() => this.setState({ clicked: false }), 4000);
  };

  handleClick = () => {
    this.setState({ clicked: true }, this.removeNotification);
  };

  render() {
    const { clicked } = this.state;

    return (
      <>
        {clicked && <GoogleAuthNotification />}
        <button
          className={styles.Button}
          type="button"
          onClick={this.handleClick}
        >
          <div className={styles.Container}>
            <div className={styles.GoogleImage} />
            <span className={styles.GoogleName}>Google</span>
          </div>
        </button>
      </>
    );
  }
}
