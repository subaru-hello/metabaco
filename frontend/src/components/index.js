import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
    render() {
      return (
        <button className="square" 
        onClick={() => this.props.onClick}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    // 【dataを書く場所】 
    // props down的な
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
    //【関数を書く場所】
    //SquareでボタンがクリックされたらBoardのhandleClickが発火するようにする
    renderSquare(i) {
      //小要素であるSquareをimportしてい
      return <Square  
      value={i}
      onClick={()=> this.handleClick(i)}
      />;
    }


  //BorderComponentとしての機能
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  export default Game
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  