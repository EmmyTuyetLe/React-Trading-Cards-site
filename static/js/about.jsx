function About() {
    return (
      <React.Fragment>
        <h1>This site was created by Balloonicorn!</h1>
        <div>
          <a href="https://github.com/EmmyTuyetLe" target="_blank" rel="noreferrer">
            Check out my Github!
          </a>
        </div>
        <br></br>
        <div>
          <a href="/">Back to the Homepage</a>
        </div>
      </React.Fragment>
    );
  }

ReactDOM.render(<About/>, document.querySelector('#about'));