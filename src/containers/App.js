import React from 'react';
import Users from '../components/Users';
import Detail from '../components/Detail';
import '../containers/App.css';

class App extends React.Component{
  constructor() {
      super();
  }

  render() {
      return(
        <div className='rowC'>
            <Users />
            <Detail />
        </div>
      )
  }
}

export default App;