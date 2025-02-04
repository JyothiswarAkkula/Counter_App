import './App.css'
import { useState } from 'react'

function Ap() {

  let [count1, setcount] = useState(0)
  let stock = 10

  return (
    <div className="Wrapper">
      <button className='minus' onClick={() => {
        if (count1 > 0) {
          setcount(count1 - 1)
        }
      }}>Decress stock(-)</button>
      <p>{count1}</p>
      <button className='pulse' onClick={() => {
        if (count1 < stock) {
          setcount(count1 + 1)
        }
      }}>Incress stock(+)</button>


    </div>
  )
 

}
export default Ap