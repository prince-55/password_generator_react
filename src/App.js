import React, { useEffect, useState } from 'react'
import './App.scss';
import SliderComponent from './components/SliderComponent'
import CheckBoxComponent from './components/CheckBoxComponent';
import { ArrowRight, Clipboard } from 'react-bootstrap-icons';

function App() {
  const [length, setLength] = useState(15);
  const [password, setPassword] = useState("PBx11@by")
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState({
    uppercase: false,
    lowercase: true,
    symbols: false,
    numbers: false,
  });

  useEffect(() => {
    setCount(0)
    for (let key in checked) {
      if (checked[key]) {
        setCount(prev => {
          return prev + 1
        })
      }
    }
  }, [checked])


  const handleChange = (event) => {
    setLength(event.target.value)
  }

  const handleChangeCheck = (event) => {
    setChecked((prevState) => ({
      ...prevState,
      [event]: !checked[event],
    }))
  }

  const passwordGenerator = () => {
    setPassword("Tf@563pbm")
  }

  const copyText = () => {
    if (password.length > 0) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setInterval(() => {
        setCopied(false);
      }, 2000)
    }
  }

  return (
    <div className='container m-3 mx-auto text-white'>
      <h1 className='text-center p-4'>Password Generator</h1>
      <div className='d-flex justify-content-between output my-4 mx-auto px-2 p-1 '>

        <input className="btnInput" type="text" value={password} />
        <span className="bi bi-clipboard" onClick={copyText}>{copied ? "Password Copied" : <Clipboard />} </span>
      </div>
      <div className='box p-3 mb-4'>
        <SliderComponent value={length} setValue={setLength} handleChange={handleChange} />
        <div className='checkbox_container d-flex flex-column my-4 ms-2'>
          <CheckBoxComponent
            defaultChecked={checked.uppercase}
            checked={checked.uppercase}
            handleCheck={() => handleChangeCheck('uppercase')}
            labelValue="Include Uppercase Letters"
          />

          <CheckBoxComponent
            defaultChecked={checked.lowercase}
            checked={checked.lowercase}
            handleCheck={() => handleChangeCheck('lowercase')}
            labelValue="Include LowerCase Letters"
          />

          <CheckBoxComponent
            defaultChecked={checked.numbers}
            checked={checked.numbers}
            handleCheck={() => handleChangeCheck('numbers')}
            labelValue="Include Numbers"
          />

          <CheckBoxComponent
            defaultChecked={checked.symbols}
            checked={checked.symbols}
            handleCheck={() => handleChangeCheck('symbols')}
            labelValue="Include Symbols"
          />
          <div className='d-flex strength mx-auto my-3 px-3 justify-content-between'>
            <span>Strength</span>
            <span>
              <span>
                {(count == 0) && "Very Low "}
                {(count == 1) && "Low "}
                {(count == 2) && "Medium "}
                {(count == 3) && "Strong "}
                {(count == 4) && "Very Strong "}
              </span>
              {(() => {
                const arr = []
                for (let i = 0; i < count; i++) {
                  arr.push(<span className='spanFill' />)
                }
                for (let i = 0; i < (4 - count); i++) {
                  arr.push(<span className="spanBlank" />)
                }
                return arr;
              })()}
            </span>
          </div>
          <button className='my-3' onClick={passwordGenerator}>GENERATE <ArrowRight /> </button>
        </div>
      </div>
    </div>
  )
}

export default App