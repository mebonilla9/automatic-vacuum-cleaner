import './style.css'
import { ShapeGenerator } from './ShapeGenerator'
import 'tw-elements';

document.querySelector('#app').innerHTML = `
<div>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <form id="formSim">
      <div class="form-group mb-6">
        <input id="txtAttempt" type="number" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
          placeholder="Vacuum Cleaner Attempts">
      </div>
      <div class="form-group mb-6">
        <input id="txtQuantity" type="number" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
          placeholder="Trash Quantity">
      </div>
      <button id="btnRun type="submit" class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Run simulation</button>
    </form>
  </div>
  <div class="simulation">
    <canvas id="mainSpace" class="canvas" width="1000" height="600"></canvas>
  </div>
</div>
`

const formSim = document.getElementById('formSim')
const canvas = document.getElementById('mainSpace')

const context = canvas.getContext('2d')
context.beginPath()
context.moveTo(0,100)
context.lineTo(1000,100)
context.stroke()
context.beginPath()
context.moveTo(500, 100)
context.lineTo(500, 600)
context.stroke()

formSim.addEventListener('submit', event => {
  event.preventDefault()
  console.log('clicked')
  const context = canvas.getContext('2d')
  const txtQuantity = document.getElementById('txtQuantity')
  const generator = new ShapeGenerator(context, parseInt(txtQuantity.value))
  generator.generate()
})

