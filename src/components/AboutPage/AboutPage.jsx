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
        {/* <p>Image Upload</p> */}
        <p>Location Setting</p>
        <p>User Contact Information</p>

        <h2>Technologies Used</h2>
        <p>Node</p>
        <p>Express</p>
        <p>React</p>
        <p>React-Redux</p>
        <p>Redux-Saga</p>
        <p>Postgresql</p>
        <p>Sweet Alert 2</p>
        <p>MUI</p>


        <h2>Thank You</h2>
        <p>Instructors</p>
        <p>Butler Cohort</p>
        <p>Prime Digital Academy</p>
        <p>Friends and Family</p>
        <p>Audience</p>
      </div>
    </div>
  );
}

export default AboutPage;
