//import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StatisticList from './StatisticList';
import StatisticDetail from './StatisticDetail';
import OtherDetail from './OtherDetail';
//import BlogDetails from './BlogDetails';
//import NotFound from './NotFound';

function App() {
  // const [data, setData] = useState({ "members": ["Member1", "Member2"] });
  // const title = 'Welcome to site'

  // async function getData() {
  //   try {
  //     fetch("http://localhost:5000/members").then(
  //       res => res.json()
  //     ).then(
  //       data => {
  //         setData(data);
  //         console.log(data);
  //       }
  //     );
  //   } catch (ex) { console.log(ex); }

  // }

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   getData();
  //   // }, 10000);

  // }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/statisticlist">
              <StatisticList />
            </Route>
            <Route path="/statisticdetail/:id">
              <StatisticDetail />
            </Route>
            <Route path="/otherdetail">
              <OtherDetail />
            </Route>
          </Switch>
        </div>

        {/* <div><img src={require('./images/pingpongracket.png')} style={{ width: 200, height: 200 }} /></div>
      <div> -- {title} -- </div>
      <div>{
        (typeof data.members === undefined) ? (
          <p>loading</p>
        ) : (
          data.members?.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )
      }</div> */}
      </div>
    </Router>
  );
}

export default App
