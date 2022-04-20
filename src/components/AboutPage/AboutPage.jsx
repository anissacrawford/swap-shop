import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="center">
        <h1>About</h1>

        <h2>Next Steps</h2>

        <h2>Technologies Used</h2>
        <p>Node</p>
        <p>Express</p>
        <p>React</p>
        <p>Postgresql</p>
        <p>Heroku</p>
        <p>MUI</p>
        

        <h2>Thank You</h2>
        <p>Instructors</p>
        <p>Butler Cohort</p>
        <p>Prime Digital Academy</p>
      </div>
    </div>
  );
}

export default AboutPage;
