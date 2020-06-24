import React from 'react';
import ImageList from './components/ImageList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'in'
    };
  }

  render() {
    return (
      <div>
        <span>&lang;</span>
        <ImageList />
        <span>&rang;</span>
      </div>
    );
  }
}

export default App;
