import React from 'react';

const Home = () => {
  return (
    <div className="jumbotron p-4 m-3 bg-light border-primary rounded">
      <h2 className="display-4">Welcome To GOT GETTER</h2>
      <p className="lead">Use the navigation to head to other pages and check out our cool tools to get that essential GOT info you need!</p>
      <hr className="my-4"/>
      <h3 className="display-8">The Rundown</h3>
      <p className="lead">Head to the 'Search' page to search for your favorite character. If you need some house counts, head to 'Houses' and we'll give ya graph for that!</p>
    </div>
  );
};

export default Home;