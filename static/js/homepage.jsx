'use strict';

function Homepage() {
  return (
     <div>
      <h2>Welcome, user</h2>
      <a href="http://localhost:5000/cards">Link to cards page</a>
      <br></br>
      <br></br>
      <img src="/static/img/balloonicorn.jpg"></img>

      </div>
     
     )
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
