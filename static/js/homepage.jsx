'use strict';

function Homepage() {
  return( 
  <div>
    <h2>Welcome!</h2>
    <a href="/cards"> Cards </a>
  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
