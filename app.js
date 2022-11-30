//selecting elements
const backg = document.getElementById('canvas');
const btn = document.getElementById('button');
// color code --- #FF5733


const makeColor = function(){
    const num_one = Math.floor(Math.random()*7);
    const num_two = Math.floor(Math.random()*10);
    const num_three = Math.floor(Math.random()*4);
    const num_four = Math.floor(Math.random()*8);
    const random_color = '#F'+num_one+num_two+'C'+num_four+'F';
    backg.style.backgroundColor = random_color; 

}

btn.addEventListener('click',makeColor);