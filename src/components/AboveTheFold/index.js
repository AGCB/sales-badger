import React from 'react';
import './above-the-fold.css';
import Header from '../Header';

function AboveTheFold() {
  return (
    <div className="above-the-fold">
      <Header />
      <div className="hero-image-wrapper">
        <img
          className="hero-image"
          alt="dd"
          src="https://flickrtheblog.files.wordpress.com/2017/11/10285894466_b72616f2c1_b.jpg?w=1024&h=423&crop=1"/>
      </div>
      <div className="atf-messaging">
        <span className="atf-bold">A future where AI and humans work hand in hand</span>
        <span className="atf-message">At SalesBadger... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipignam aliquam quaerat voluptatem. <br/><br/>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam <br/><br/>nihil molesvoluptas nulla pariatur?</span>
      </div>
    </div>
  )
}

export default AboveTheFold;
