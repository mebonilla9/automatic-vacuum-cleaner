import './style.css'
import { ShapeGenerator } from './ShapeGenerator'

document.querySelector('#app').innerHTML = `
  <div>
    <form>
      <input type="text" id="txtQuantity">
      <button type="submit" id="btnRun">Run</button>
    </form>
    <canvas id="mainSpace" class="canvas" width="1000" height="600">
    </canvas>
  </div>
`

const btnRun = document.getElementById('btnRun')
const canvas = document.getElementById('mainSpace')

const context = canvas.getContext('2d')
context.beginPath()
context.moveTo(0,100)
context.lineTo(0,1000)
context.stroke()
context.beginPath()
context.moveTo(500, 100)
context.lineTo(500, 600)
context.stroke()

btnRun.addEventListener('click', event => {
  event.preventDefault()
  console.log('clicked')
  const context = canvas.getContext('2d')
  const txtQuantity = document.getElementById('txtQuantity')
  const generator = new ShapeGenerator(context, parseInt(txtQuantity.value))
  generator.generate()
})

