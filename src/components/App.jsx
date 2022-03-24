import React from 'react';
import SearchBox from '../containers/SearchBox';
import TweetList from '../containers/TweetList'
import Loading from '../containers/Loading'


const App = () => (
  <div>
    <SearchBox />
    <Loading />
    <TweetList />
  </div>
);


export default App;
