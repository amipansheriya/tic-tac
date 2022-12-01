import logo from './logo.svg';
import './App.css';
import './tic-tac.css';
import { useState } from 'react';
var t=0;
var val = ["","","","","","","","",""];

function App() {
 
    const [pos,setpos] = useState('');
    const [num,setNum] = useState(0);
    // const [val1,setval1] = useState([]);
    //const [val,setval] = useState([]);
    // const [val,setval] = useState(["","","","","","","","",""]);
    // const [disable,setdisable] = useState(false);
    const[won,setwon] = useState('');


   
    const sign = (i) => {
      t=num;
      if(won=='')
      {
        if(val[i]=='')
        {
          if(t%2==0)
          {
              val[i]= "X";
          }
         
          t++;
          setNum(t);
        }
      }
      win();
      setTimeout(function(){com(i)},1000);
      // setTimeout(com(i),2000);

      // console.log(val);
    }

    const com = (i) =>{
      
        const x = 0 + Math.random() * (9 - 0);
        var l = Math.floor(x);
        if(won=='')
        {
          for(i=0;i<9;i++)
          {
            if(val.includes(i))
            {
              i--;
            }
          }
        
          if(val[l]=='')
          {
            if(t%2!=0)
            {
              val[l]= "O";
            }
            t++;
            setNum(t);
          }
        }
      
    }

    const win = (i) =>{
      if((val[0]=='X' && val[1]=='X' && val[2]=='X') || 
         (val[3]=='X' && val[4]=='X' && val[5]=='X') ||
         (val[6]=='X' && val[7]=='X' && val[8]=='X') ||
         (val[0]=='X' && val[4]=='X' && val[8]=='X') ||
         (val[2]=='X' && val[4]=='X' && val[6]=='X') ||
         (val[0]=='X' && val[3]=='X' && val[6]=='X') ||
         (val[1]=='X' && val[4]=='X' && val[7]=='X') ||
         (val[2]=='X' && val[5]=='X' && val[8]=='X')
      )
      {
        setwon('X is won');
      }
      else if((val[0]=='O' && val[1]=='O' && val[2]=='O') || 
              (val[3]=='O' && val[4]=='O' && val[5]=='O') ||
              (val[6]=='O' && val[7]=='O' && val[8]=='O') ||
              (val[0]=='O' && val[4]=='O' && val[8]=='O') ||
              (val[2]=='O' && val[4]=='O' && val[6]=='O') ||
              (val[0]=='O' && val[3]=='O' && val[6]=='O') ||
              (val[1]=='O' && val[4]=='O' && val[7]=='O') ||
              (val[2]=='O' && val[5]=='O' && val[8]=='O')
      )
      {
        setwon('0 is won');
      }
      
    }

    function rset()
    {
      window.location.reload();
    }

  return (
      <>
              <div className='tic-tac'>
                <div className='fdiv'>
                  <input type='button' className='box' value={val[0]} onClick={() => {sign('0')}}></input>
                  <input type='button' className='box' value={val[1]} onClick={() => {sign('1')}}></input>
                  <input type='button' className='box' value={val[2]} onClick={() => {sign('2')}}></input>
                </div>
             
                <div className='mdiv'>
                  <input type='button' className='box' value={val[3]} onClick={() => {sign('3')}}></input>
                  <input type='button' className='box' value={val[4]} onClick={() => {sign('4')}}></input>
                  <input type='button' className='box' value={val[5]} onClick={() => {sign('5')}}></input>
                </div>
              
                <div className='ldiv'>
                  <input type='button' className='box' value={val[6]} onClick={() => {sign('6')}}></input>
                  <input type='button' className='box' value={val[7]} onClick={() =>{sign('7')}}></input>
                  <input type='button' className='box' value={val[8]} onClick={() => {sign('8')}}></input>
                </div>
                </div>
        <div>
          <div className='win'> 
            <input type='text' className='won' value={won}></input>
          </div>
        </div>
        <div className='reset'>
          <input type='button' value={'reset'} onClick={rset}></input>
        </div>
      </>
  );
}

export default App;
