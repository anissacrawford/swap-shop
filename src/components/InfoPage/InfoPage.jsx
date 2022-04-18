import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1>Info Page</h1>
      <h1>Technologies Used</h1>
      <h1>Thank you</h1>
    </div>
  );
}

export default InfoPage;
