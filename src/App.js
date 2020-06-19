import React from 'react';
import './App.css';

let getRandom = () => Math.floor(Math.random() * Math.floor(2));

class App extends React.Component{
  constructor(props){
    super(props)

    let count = localStorage.getItem("score") || 0;


    let changed1 = getRandom()
    let changed2 = getRandom()
    let changed3 = getRandom()
    let changed4 = getRandom()
    let changed5 = getRandom()
    let changed6 = getRandom()
    let changed7 = getRandom()
    let changed8 = getRandom()
    let changed9 = getRandom()

    this.state = {
      posY: 1,
      posX: 13,
      size: 13,
      score: count,
      pending: false,
      field:[
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, changed6, 1, 1, 1, 1, 1, changed4, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
      [0, changed9, 0, changed2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, changed7, 0, 0, 1, 0, changed5, 0, 1, 0, changed3, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, changed1, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, changed8, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
  }}


  showAvalibleStep = async () => {
    let prevState = JSON.parse(JSON.stringify(this.state.field))
    let copy = JSON.parse(JSON.stringify(this.state.field))

    let prevX = this.state.posX;
    let prevY = this.state.posY;

    let bottomStep = this.state.posX + 1;
    let topStep = this.state.posX - 1;
    let leftStep = this.state.posY - 1;
    let rightStep = this.state.posY + 1;

    if(topStep >= 0 && copy[topStep][this.state.posY] === 1){
      copy[topStep][this.state.posY] = 2;
    }


    if(bottomStep <= this.state.size && copy[bottomStep][this.state.posY] === 1){
      copy[bottomStep][this.state.posY] = 2;
    }

    if(leftStep >= 0 && copy[this.state.posX][leftStep] === 1){
      copy[this.state.posX][leftStep] = 2;
    }

    if(rightStep <= this.state.size && copy[this.state.posX][rightStep] === 1){
      copy[this.state.posX][rightStep] = 2;
    }

    this.setState({field: copy, pending: true})

    setTimeout(()=> {
      this.setState({field: prevState, pending: false})
    }, 500)


  }

  rerender = (x, y) =>{
    let fieldCopy = JSON.parse(JSON.stringify(this.state.field))
    fieldCopy[this.state.posX][this.state.posY] = 1;
    fieldCopy[x][y] = 2;

    this.setState({
      posX: x,
      posY: y, 
      field: fieldCopy
    })
  }

  moveUp = () =>{
    let posX = this.state.posX - 1;

  
    if(posX < 0 || this.state.field[posX][this.state.posY] === 0){
      return false;
    }else{
      if(posX === 0) {
        alert("You win!!!")
        localStorage.setItem("score", ++this.state.score)
        window.location.reload();
      }
    this.rerender(posX, this.state.posY)
    }
  }

  moveDown = () => {
    let posX = this.state.posX + 1
    
    if(posX > this.state.size || this.state.field[posX][this.state.posY] === 0){
      return false;
    }else{
    this.rerender(posX, this.state.posY)
    }
  }

  moveLeft = () => {
    let posY = this.state.posY - 1
    
    if(posY < 0 || this.state.field[this.state.posX][posY] === 0){
      return false;
    }else{
    this.rerender(this.state.posX, posY)
    }
  }

  moveRight = () =>{
    let posY = this.state.posY + 1
    
    if(posY > this.state.size || this.state.field[this.state.posX][posY] === 0){
      return false;
    }else{
    this.rerender(this.state.posX, posY)
    }
  }

  render(){

  let field = this.state.field.map(row => row.map(item => <div className={"block " + ((item === 0) ? "wall" : (item===2) ? "persom" : "way")}></div>));

  return (<div className="App">
              <div style={{"lineHeight": "0", "maxWidth" : "700px"}}>{field}</div>
              <div>
                <button onClick={() => this.moveUp()} disabled={this.state.pending}>UP</button>
                <button onClick={() => this.moveDown()} disabled={this.state.pending}>Down</button>
                <button onClick={() => this.moveLeft()} disabled={this.state.pending}>Left</button>
                <button onClick={() => this.moveRight()} disabled={this.state.pending}>Right</button>
                <br/>
                <button onClick={()=> this.showAvalibleStep()} disabled={this.state.pending}>Show avaliable step</button>
                <div className="score">
                  Score {this.state.score}
                </div>
              </div>
          </div>)
  }
}

export default App;
