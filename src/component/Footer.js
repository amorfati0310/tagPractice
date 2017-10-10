import React, {Component} from 'react'


const styles = {
  clearAllContainer: {
  width: '8.5rem',
  height: 50,
  lineHeight: 50,
  backgroundColor: 'white',
  borderRadius: 5,
  margin: '0 auto',
  },
  clearAllBtn: {
   color: '#e20303',
  },
}

export default class Footer extends Component {
  render() {
    return (
      <footer style={styles.clearAllContainer}>
        <span style={styles.clearAllBtn}>Clear All</span>
      </footer>
    )
  }
}