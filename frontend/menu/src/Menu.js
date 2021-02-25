import React from 'react';
import "antd/dist/antd.css";
import {Divider} from 'antd';
import FetchServer from "./FetchServer";

class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      responseReceived: null, // Response from the server.
      errorReceived: null,    // Error Response from the server.
      fetchedServer: false // Response from receviced ? 
    };
  }


menuFetch = () => {
  let getInfo = new FetchServer();
  let route = "/menu";
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    console.log(results)
  });

}

onFinishFailed = errorInfo => {
  console.log('Menu.js -> Form error: ', errorInfo);

}

componentDidMount(){
  this.menuFetch();
  console.log("test");
}

render() {
  return( <h1> SUCCESS</h1> );

}

}
  
export default Menu;