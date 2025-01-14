import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const user = {
  name: 'John Doe',
  age: 25,
  email: "john"
};

function MyButton(params) {
  function handleClick() {
    click(numberOfClicks + 1)
    //pri praci se stavy nastavime stavovou promenou a to jako [promena drzicistav  , funkce ktera ji zmeni]
    // pri updatovani stavu pote volam:  funkcekterajimeni(promenadrzicistav + 1)
  }
  const [numberOfClicks, click] = useState(0)
  return (
    <>
      <button onClick={handleClick}>
        Click me! 
      </button>
      <p> I was Clicked {numberOfClicks}</p>
    </>
  )
}
const users = [
  {id:"1", name: 'John Doe', age: 25},
  {id:"2", name: 'Jane Doe', age: 24},
  {id:"3",name: 'John Smith', age: 30}
]
function MyList() {
  //pri prochazeni listu musim pouzit map
  // dam list.map((promena) tady promenou si muzu predstavit jako i => kod to chci pro kazdy delat)
  //pri pouzivani .map musim mit unikatni key, ktery je v tomto pripade id
  
  const list = users.map((user) =>
    <li
      key={user.id}
      style={{
        color: user.age>25? "red" : "blue"
      }}
      //priklad stylu a zkraceneho ifu
    > 
      {user.name}
    </li>
  )
  
  return (
    <ul>
      {list}
    </ul>
  )
}

let emailContent;
if (user.email != '') {
  emailContent = <p>Email: {user.email}</p>
} else {
  emailContent = <p>Email: Not provided</p>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    //Kdyz chci vratit vice elementu, musim je obalit do jednoho elementu <> </>
    //promene pri vraceni davam do {} a pokud chci z promeny dostat nejaky atribut jako tady user name tak dam promena. atribut
    
    
    <>
      <div className="App">
        <h1>Hello Vite + React!</h1>
        <p>My name is {user.name}</p>
        <p>{ emailContent}</p>
        <MyButton />
        <MyButton />
        <div><MyList /></div>
      </div>
    </>
  )
}

export default App
