import React, { Component } from 'react';
// import Snake from './Snake';
// import Food from './Food';


//create random method for food coordinates
const getRandomCo = () => { 
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max-min+1)+min)/2) * 2;
  let y = Math.floor((Math.random() * (max-min+1)+min)/2) * 2;

  return [x, y];
}

const randomBgColor = () => { 
  let x = Math.floor(Math.random() * 32);
  let y = Math.floor(Math.random() * 32);
  let z = Math.floor(Math.random() * 32);
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  
  return bgColor
}

const initState = { 
  food: getRandomCo(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
   [2,0]
  ],
  color: randomBgColor()
}

class Game extends Component {
  
  state = initState;

  componentDidMount() { 
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() { 
    this.checkBorder();
    this. checkIfCollapse();
    this.checkIfEaten();
  }

  onKeyDown = (e) => { 
   e = e || window.event; 
   switch (e.keyCode) { 
     case 38: 
     this.setState({direction: 'UP'});
     break;
     case 40: 
     this.setState({direction: 'DOWN'});
     break;
     case 37: 
     this.setState({direction: 'LEFT'});
     break;
     case 39:
     this.setState({direction: 'RIGHT'});
     break;
   }
  }
  

  moveSnake = () => { 
    let newDots = [...this.state.snakeDots];
    let head = newDots[newDots.length - 1];

    switch(this.state.direction) { 
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    newDots.push(head);
    newDots.shift();
    this.setState ({ 
      snakeDots: newDots
    })
  }

  checkBorder () { 
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if ( head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0 ) { 
      this.onGameOver();
    }
  }

  checkIfCollapse () { 
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => { 
      if(head[0] === dot[0] && head[1] === dot[1]) { 
        this.onGameOver();
      }
    })

  }

  checkIfEaten () { 
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if ( head[0] === food[0] && head[1] === food[1]) { 
      this.setState({
        food: getRandomCo()
      })
      this.stretchSnake()
      this.increaseSpeed()
    }
  }

  stretchSnake() { 
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed () { 
    if (this.state.speed > 10) { 
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }
  onGameOver () { 
    alert(`game over, snake length is ${this.state.snakeDots.length}`);
    this.setState(initState)
  }

  render() { 
    return(
      <div className='game-area' 
    style={{backgroundColor: randomBgColor()}} >
        <div>
        </div>
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
      </div>
    )
  }

}

const Food = (props) => { 
    const style = { 
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%` 
    }
    return (
        <div className='snake-food' style={style}></div>
    )
}


const Snake = (props) => {
    return (
      <div>
        {props.snakeDots.map((dot, i) => {
          const style = {
            left: `${dot[0]}%`,
            top: `${dot[1]}%`
          }
          return (
            <div className="snake-dot" key={i} style={style}></div>
          )
        })}
      </div>
    )
  }
export default Game;
