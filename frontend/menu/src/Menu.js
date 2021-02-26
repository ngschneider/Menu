import React from 'react';
import "antd/dist/antd.css";
import FetchServer from "./FetchServer";
import {Divider, Image,Collapse} from 'antd';
const {Panel} = Collapse;


class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      responseReceivedImgB: [] , // Response from the server.
      responseReceivedDescB: [],
      responseReceivedNameB: [],
      responseReceivedImgD: [] , // Response from the server.
      responseReceivedDescD: [],
      responseReceivedNameD: [],
      responseReceivedImgC: [] , // Response from the server.
      responseReceivedDescC: [],
      responseReceivedNameC: [],
      responseReceivedImgS: [] , // Response from the server.
      responseReceivedDescS: [],
      responseReceivedNameS: [],
      errorReceived: null,    // Error Response from the server.
      fetchedServer: false // Response from receviced ? 
    };
  }


menuFetch = (routeInfo) => {
  let getInfo = new FetchServer();
  let route =  "/" + routeInfo;
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    //åconsole.log(results)
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
        responseReceivedImgB : imgarr,
        responseReceivedDescB :  descarr,
        responseReceivedNameB : namearr
      });
  }
  });

}
menuFetchB = () => {
  let getInfo = new FetchServer();
  let route =  "/burger" ;
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    //åconsole.log(results)
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
        responseReceivedImgB : imgarr,
        responseReceivedDescB :  descarr,
        responseReceivedNameB : namearr
      });
  }
  });

}
menuFetchC = () => {
  let getInfo = new FetchServer();
  let route =  "/chicken" 
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    //åconsole.log(results)
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
        responseReceivedImgC: imgarr,
        responseReceivedDescC :  descarr,
        responseReceivedNameC : namearr
      });
  }
  });

}
menuFetchS = () => {
  let getInfo = new FetchServer();
  let route =  "/sides" ;
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    //åconsole.log(results)
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
        responseReceivedImgS : imgarr,
        responseReceivedDescS :  descarr,
        responseReceivedNameS : namearr
      });
  }
  });

}
menuFetchD = () => {
  let getInfo = new FetchServer();
  let route =  "/drinks" ;
  getInfo.fetchRouteServer(route, '' ,(results,connected) => {
    //åconsole.log(results)
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
        responseReceivedImgD : imgarr,
        responseReceivedDescD :  descarr,
        responseReceivedNameD : namearr
      });
  }
  });

}

onFinishFailed = errorInfo => {
  console.log('Menu.js -> Form error: ', errorInfo);

}

componentDidMount(){
  this.menuFetchB();
  this.menuFetchC();
  this.menuFetchS();
 this.menuFetchD();

}

render() {
  //let statement = <th>BURGER KING MENU </th>;
  let statement = [];
  
  for(let i = 0; i < this.state.responseReceivedDescB.length; i++){
    let img = this.state.responseReceivedImgB[i];
    let name = this.state.responseReceivedNameB[i]
    let desc = this.state.responseReceivedDescB[i]
    statement.push(this.item(img, name, desc));
  }
  let chicken = [];
  for(let i = 0; i < this.state.responseReceivedDescC.length; i++){
    let img = this.state.responseReceivedImgC[i];
    let name = this.state.responseReceivedNameC[i]
    let desc = this.state.responseReceivedDescC[i]
    chicken.push(this.item(img, name, desc));
  }
  let drinks = [];
  for(let i = 0; i < this.state.responseReceivedDescD.length; i++){
    let img = this.state.responseReceivedImgD[i];
    let name = this.state.responseReceivedNameD[i]
    let desc = this.state.responseReceivedDescD[i]
    drinks.push(this.item(img, name, desc));
  }
  let sides = [];
  for(let i = 0; i < this.state.responseReceivedDescS.length; i++){
    let img = this.state.responseReceivedImgS[i];
    let name = this.state.responseReceivedNameS[i]
    let desc = this.state.responseReceivedDescS[i]
    sides.push(this.item(img, name, desc));
  }
  return (
  <div> <center><h1>BURGER KING MENU</h1></center>
   <Collapse defaultActiveKey={['1']}>
    <Panel header="Burger" key="1">
      <p>{statement}</p>
    </Panel>
    <Panel header="Chicken" key="2">
      <p>{chicken}</p>
    </Panel>
    <Panel header="Sides" key="3">
      <p>{sides}</p>
    </Panel>
    <Panel header="Drinks" key="4">
      <p>{drinks}</p>
    </Panel>

  </Collapse>
   </div>
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