import React from 'react';
import "antd/dist/antd.css";
import {Divider, Image} from 'antd';
import FetchServer from "./FetchServer";

class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      responseReceivedImg: [] , // Response from the server.
      responseReceivedDesc: [],
      responseReceivedName: [],
      errorReceived: null,    // Error Response from the server.
      fetchedServer: false // Response from receviced ? 
    };
  }


menuFetch = () => {
  let getInfo = new FetchServer();
  let route = "/burger";
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    if(results){

      let imgarr = [];
      let namearr = [];
      let descarr = [];

      results.forEach( (element) => {
        console.log(element)
       imgarr.push(element.googleReference);
       namearr.push(element.name);
       descarr.push(element.description);

      });
      
      this.setState({
        responseReceivedImg : imgarr,
        responseReceivedDesc :  descarr,
        responseReceivedName : namearr
      });
  }
  });

}

onFinishFailed = errorInfo => {
  console.log('Menu.js -> Form error: ', errorInfo);

}

componentDidMount(){
  this.menuFetch();
}

render() {
  //let statement = <th>BURGER KING MENU </th>;
  let statement = [];
  
  for(let i = 0; i < this.state.responseReceivedDesc.length; i++){
    let img = this.state.responseReceivedImg[i];
    let name = this.state.responseReceivedName[i]
    let desc = this.state.responseReceivedDesc[i]
    console.log(img)
    console.log(name)
    console.log(desc)
    statement.push(this.item(img, name, desc));
  }
  return (
  <div> <center><h1>BURGER KING MENU</h1></center> {statement} </div>
  );

}

item = (img,name,desc) => {
  console.log(img)
  console.log(desc)

  console.log(name)

  let api = "http://storage.googleapis.com/" +  "techmenu"+ "/";
  return (
 <div>
   <br/>
    <center>
      <h1>{name}</h1>
      <Image width={200} src={api+img}/>
  </center>
<h3>{desc}</h3>
<br/>
</div>


  );
}

}
  
export default Menu;