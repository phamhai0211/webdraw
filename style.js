const canvas = document.querySelector('#draw')
const ctx =canvas.getContext('2d')

ctx.fillStyle = 'red';

function draw(x,y){
    const circle = new Path2D();
    circle.arc(x,y,10,0,2*Math.PI);
    ctx.fill(circle)
 }

 let ismouseDown = false;

canvas.addEventListener('mousedown',(e) =>{
    ismouseDown = true;
})
 canvas.addEventListener('mouseup',(e)=>{
    ismouseDown = false;
 })

 canvas.addEventListener('mousemove',(e)=>{
    if(!ismouseDown){
         return
     }
    const{
        clientX,
        clientY
     } = e

     const react = canvas.getBoundingClientRect()
     draw(clientX - react.left, clientY - react.top)
})

 const colorPickers = [...document.querySelectorAll('.color-picker')]
 colorPickers.forEach(colorPicker => {
     colorPicker.addEventListener('click',(e)=>{
         ctx.fillStyle=e.target.style.backgroundColor
        
    })
 })

 $('#clear-button').addEventListener('click',(e)=>{
     ctx.clearReact(0,0,600,600)
 })