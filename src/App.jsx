import React,{ useState } from 'react';

const App = () => {

  // create a state to hold the currently active/focused input element
  const [currentlyFocusedInput, setCurrentlyFocusedInput] = useState('');
  const [isShift, setShift] = useState(true);

  const buttonHandler = (e) => {
    setCurrentlyFocusedInput((currFoc) => {
		console.log(e.target.value);
      let val = currFoc.value + e.target.value;
      currFoc.value = val;
      //console.log(val);
      return currFoc;
    });
	e.target.value = "" + e.target.value;
    currentlyFocusedInput.focus();
  };

  const backspaceHandler = (e) => {
    setCurrentlyFocusedInput((currFoc) => {
		let val = currFoc.value.substr(0, currFoc.value.length - 1) + e.target.value.substr(currFoc.value.length);
		currFoc.value = val;
		console.log(currFoc.value.length);
      return currFoc;
    });
    currentlyFocusedInput.focus();
  };

  const defaultTemplate = (
    <div className='keyboard-container'>
      <div className='key-row'>
        <button value='1' onClick={buttonHandler}>
          1
        </button>
        <button value='2' onClick={buttonHandler}>
          2
        </button>
        <button value='3' onClick={buttonHandler}>
          3
        </button>
        <button value='4' onClick={buttonHandler}>
          4
        </button>
        <button value='5' onClick={buttonHandler}>
          5
        </button>
        <button value='6' onClick={buttonHandler}>
          6
        </button>
        <button value='7' onClick={buttonHandler}>
          7
        </button>
        <button value='8' onClick={buttonHandler}>
          8
        </button>
        <button value='9' onClick={buttonHandler}>
          9
        </button>
        <button value='0' onClick={buttonHandler}>
          0
        </button>
      </div>
      <div className='key-row'>
        <button value='q' onClick={buttonHandler}>
          q
        </button>
        <button value='w' onClick={buttonHandler}>
          w
        </button>
        <button value='e' onClick={buttonHandler}>
          e
        </button>
        <button value='r' onClick={buttonHandler}>
          r
        </button>
        <button value='t' onClick={buttonHandler}>
          t
        </button>
        <button value='y' onClick={buttonHandler}>
          y
        </button>
        <button value='u' onClick={buttonHandler}>
          u
        </button>
        <button value='i' onClick={buttonHandler}>
          i
        </button>
        <button value='o' onClick={buttonHandler}>
          o
        </button>
        <button value='p' onClick={buttonHandler}>
          p
        </button>
      </div>
      <div className='key-row'>
        <button value='a' onClick={buttonHandler}>
          a
        </button>
        <button value='s' onClick={buttonHandler}>
          s
        </button>
        <button value='d' onClick={buttonHandler}>
          d
        </button>
        <button value='f' onClick={buttonHandler}>
          f
        </button>
        <button value='g' onClick={buttonHandler}>
          g
        </button>
        <button value='h' onClick={buttonHandler}>
          h
        </button>
        <button value='j' onClick={buttonHandler}>
          j
        </button>
        <button value='k' onClick={buttonHandler}>
          k
        </button>
        <button value='l' onClick={buttonHandler}>
          l
        </button>
      </div>
      <div className='key-row'>
        <button onClick={()=>setShift(false)}>
          Shift
        </button>
        <button value='z' onClick={buttonHandler}>
          z
        </button>
        <button value='x' onClick={buttonHandler}>
          x
        </button>
        <button value='c' onClick={buttonHandler}>
          c
        </button>
        <button value='v' onClick={buttonHandler}>
          v
        </button>
        <button value='b' onClick={buttonHandler}>
          b
        </button>
        <button value='n' onClick={buttonHandler}>
          n
        </button>
        <button value='m' onClick={buttonHandler}>
          m
        </button>
        <button value=' ' onClick={backspaceHandler} className='btn-large'>
          Backspace
        </button>
      </div>
      <div className='key-row'>
        <button value=' ' onClick={buttonHandler} className='btn-full'></button>
      </div>
    </div>
  );

  const shiftTemplate = (
    <div className='keyboard-container'>
      <div className='key-row'>
        <button value='1' onClick={buttonHandler}>
          1
        </button>
        <button value='2' onClick={buttonHandler}>
          2
        </button>
        <button value='3' onClick={buttonHandler}>
          3
        </button>
        <button value='4' onClick={buttonHandler}>
          4
        </button>
        <button value='5' onClick={buttonHandler}>
          5
        </button>
        <button value='6' onClick={buttonHandler}>
          6
        </button>
        <button value='7' onClick={buttonHandler}>
          7
        </button>
        <button value='8' onClick={buttonHandler}>
          8
        </button>
        <button value='9' onClick={buttonHandler}>
          9
        </button>
        <button value='0' onClick={buttonHandler}>
          0
        </button>
      </div>
      <div className='key-row'>
        <button value='Q' onClick={buttonHandler}>
          Q
        </button>
        <button value='W' onClick={buttonHandler}>
          W
        </button>
        <button value='E' onClick={buttonHandler}>
          E
        </button>
        <button value='R' onClick={buttonHandler}>
          R
        </button>
        <button value='T' onClick={buttonHandler}>
          T
        </button>
        <button value='Y' onClick={buttonHandler}>
          Y
        </button>
        <button value='U' onClick={buttonHandler}>
          U
        </button>
        <button value='I' onClick={buttonHandler}>
          I
        </button>
        <button value='O' onClick={buttonHandler}>
          O
        </button>
        <button value='P' onClick={buttonHandler}>
          P
        </button>
      </div>
      <div className='key-row'>
        <button value='A' onClick={buttonHandler}>
          A
        </button>
        <button value='S' onClick={buttonHandler}>
          S
        </button>
        <button value='D' onClick={buttonHandler}>
          D
        </button>
        <button value='F' onClick={buttonHandler}>
          F
        </button>
        <button value='G' onClick={buttonHandler}>
          G
        </button>
        <button value='H' onClick={buttonHandler}>
          H
        </button>
        <button value='J' onClick={buttonHandler}>
          J
        </button>
        <button value='K' onClick={buttonHandler}>
          K
        </button>
        <button value='L' onClick={buttonHandler}>
          L
        </button>
      </div>
      <div className='key-row'>
		<button onClick={()=>setShift(true)}>Shift</button>
		
        <button value='Z' onClick={buttonHandler}>
          Z
        </button>
        <button value='X' onClick={buttonHandler}>
          X
        </button>
        <button value='C' onClick={buttonHandler}>
          C
        </button>
        <button value='V' onClick={buttonHandler}>
          V
        </button>
        <button value='B' onClick={buttonHandler}>
          B
        </button>
        <button value='N' onClick={buttonHandler}>
          N
        </button>
        <button value='M' onClick={buttonHandler}>
          M
        </button>
        <button value=' ' onClick={backspaceHandler} className='btn-large'>
          Backspace
        </button>
      </div>
      <div className='key-row'>
        <button value=' ' onClick={buttonHandler} className='btn-full'></button>
      </div>
    </div>
  );

  return (
    <div className='App'>
      <div className='login-form'>
        <h2>Login</h2>
        <input
          type='text'
          placeholder='enter username'
		  autoFocus
          onFocus={(e) => setCurrentlyFocusedInput(e.target)}
        />
        <input
          type='password'
          placeholder='enter password'
          onFocus={(e) => setCurrentlyFocusedInput(e.target)}
        />
      </div>
      {isShift ? defaultTemplate : shiftTemplate}
    </div>
  );
};

export default App;
