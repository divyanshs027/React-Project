import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){  // function name always in captial
  return (
    <div>
      <h1>Ritansh react !</h1>
    </div>
  )
}
// ******** Own key will not exicute
// const ReactElement =({
//   type: 'a',
//   props: {
//       herf: "https://www.google.com",
//       target: '_blank'
//   },
//   children: 'Click to visit Google'
// })

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const AnotherUser = "ritansh n code"

// Babel inject this directly :- its a js complier
const ReactElement = React.createElement(
      'a',
      {href: 'https://google.com', target: '_blank'},
      'click me to vist google ',
      AnotherUser

    // we can't write condition here because it is 
)






ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
     ReactElement
  // </React.StrictMode>,
)
