// const screen_size = document.documentElement.clientWidth;
// const cube_dimension = 100



// class Vertex{
//     constructor(x_init,y_init,z_init){
//         this.x_init = x_init
//         this.y_init = y_init
//         this.z_init = z_init
//         this.x
//         this.y
//         this.z
//         this.radius = Math.sqrt((this.x_init**2) + (this.y_init**2) + (this.z_init ** 2))
//     }
//     calculateVertexCordinates(x_degrees,y_degrees,z_degrees)
//     {
        
//     }
// }


// // 300px 300px, 100px 300px, 100px 100px, 300px 100px
// let vertices = {};
// vertices['A'] = [0,0];
// vertices['B'] = [cube_dimension,0];
// vertices['C'] = [cube_dimension,cube_dimension];
// vertices['D'] = [0,cube_dimension];
// vertices['U'] = [0,cube_dimension];
// vertices['V'] = [cube_dimension,cube_dimension];
// vertices['W'] = [cube_dimension,0];
// vertices['X'] = [0,0];

// ABCD = document.getElementById("ABCD");
// // ABCD.classList.toggle('perm-hide');
// CDUV = document.getElementById("CDUV");
// // CDUV.classList.toggle('perm-hide');
// UVWX = document.getElementById("UVWX");
// // UVWX.classList.toggle('perm-hide');
// ABWX = document.getElementById("ABWX");
// // ABWX.classList.toggle('perm-hide');
// CBWV = document.getElementById("CBWV");
// // CBWV.classList.toggle('perm-hide');
// ADUX = document.getElementById("ADUX");
// // ADUX.classList.toggle('perm-hide');



// function setOne(){
//     setTimeout(() => setTwo(), 500)
//     square.style.marginTop='100px';
// }

// function setTwo(){
//     setTimeout(() => setOne(), 500)
//     square.style.marginTop='50px';
// }

// // SetOne()



// calculateVertexValues();

// function setVertexValues(){
//     let x_offset = 400
//     let y_offset = 200

//     let white = ABCD;
//     let green = CDUV;
//     let yellow = UVWX;
//     let blue = ABWX;
//     let red = CBWV;
//     let orange = ADUX;

    
//     if (x_slider.value >= 0){
//         green.classList.remove('hide');
//         yellow.classList.remove('hide');
//         blue.classList.add('hide');
//         white.classList.add('hide');
//     }
//     if (x_slider.value >= 90){
//         yellow.classList.remove('hide');
//         blue.classList.remove('hide');
//         green.classList.add('hide');
//         white.classList.add('hide');
//     }
//     if (x_slider.value >= 180){
//         blue.classList.remove('hide');
//         white.classList.remove('hide');
//         green.classList.add('hide');
//         yellow.classList.add('hide');
//     }
//     if (x_slider.value >= 270){
//         white.classList.remove('hide');
//         green.classList.remove('hide');
//         yellow.classList.add('hide');
//         blue.classList.add('hide');
//     }


//     if (y_slider.value >= 0){
//         green.classList.remove('hide');
//         red.classList.remove('hide');
//         blue.classList.add('hide');
//         orange.classList.add('hide');
//     }
//     if (y_slider.value >= 90){
//         green.classList.add('hide');
//         red.classList.remove('hide');
//         blue.classList.remove('hide');
//         orange.classList.add('hide');
//     }
//     if (y_slider.value >= 180){
//         green.classList.add('hide');
//         red.classList.add('hide');
//         blue.classList.remove('hide');
//         orange.classList.remove('hide');
//     }
//     if (y_slider.value >= 270){
//         green.classList.remove('hide');
//         red.classList.add('hide');
//         blue.classList.add('hide');
//         orange.classList.remove('hide');
//     }

//     // console.log(`polygon(${vertices['A'][0]} ${vertices['A'][1]}, ${vertices['B'][0]} ${vertices['B'][1]}, ${vertices['C'][0]} ${vertices['C'][1]}, ${vertices['D'][0]} ${vertices['D'][1]}`);
//     ABCD.style.clipPath = `polygon(${vertices['A'][0] + x_offset}px ${vertices['A'][1] + y_offset}px, ${vertices['B'][0] + x_offset}px ${vertices['B'][1] + y_offset}px, ${vertices['C'][0] + x_offset}px ${vertices['C'][1] + y_offset}px, ${vertices['D'][0] + x_offset}px ${vertices['D'][1] + y_offset}px`;
//     CDUV.style.clipPath = `polygon(${vertices['C'][0] + x_offset}px ${vertices['C'][1] + y_offset}px, ${vertices['D'][0] + x_offset}px ${vertices['D'][1] + y_offset}px, ${vertices['U'][0] + x_offset}px ${vertices['U'][1] + y_offset}px, ${vertices['V'][0] + x_offset}px ${vertices['V'][1] + y_offset}px`;
//     UVWX.style.clipPath = `polygon(${vertices['U'][0] + x_offset}px ${vertices['U'][1] + y_offset}px, ${vertices['V'][0] + x_offset}px ${vertices['V'][1] + y_offset}px, ${vertices['W'][0] + x_offset}px ${vertices['W'][1] + y_offset}px, ${vertices['X'][0] + x_offset}px ${vertices['X'][1] + y_offset}px`;
//     ABWX.style.clipPath = `polygon(${vertices['A'][0] + x_offset}px ${vertices['A'][1] + y_offset}px, ${vertices['B'][0] + x_offset}px ${vertices['B'][1] + y_offset}px, ${vertices['W'][0] + x_offset}px ${vertices['W'][1] + y_offset}px, ${vertices['X'][0] + x_offset}px ${vertices['X'][1] + y_offset}px`;
//     CBWV.style.clipPath = `polygon(${vertices['C'][0] + x_offset}px ${vertices['C'][1] + y_offset}px, ${vertices['B'][0] + x_offset}px ${vertices['B'][1] + y_offset}px, ${vertices['W'][0] + x_offset}px ${vertices['W'][1] + y_offset}px, ${vertices['V'][0] + x_offset}px ${vertices['V'][1] + y_offset}px`;
//     ADUX.style.clipPath = `polygon(${vertices['A'][0] + x_offset}px ${vertices['A'][1] + y_offset}px, ${vertices['D'][0] + x_offset}px ${vertices['D'][1] + y_offset}px, ${vertices['U'][0] + x_offset}px ${vertices['U'][1] + y_offset}px, ${vertices['X'][0] + x_offset}px ${vertices['X'][1] + y_offset}px`;
// }


// function calculateVertexValues(){
//     // Circle diameter constant
//     x_degrees = degToRad(x_slider.value);
//     y_degrees = degToRad(y_slider.value);
//     z_degrees = degToRad(z_slider.value);

//     d = Math.sqrt((cube_dimension ** 2) * 2)

//     vertices['B'][0] = cube_dimension/2*Math.cos(y_degrees) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2);
//     vertices['W'][0] = cube_dimension/2*Math.cos(y_degrees) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2);
//     vertices['A'][0] = cube_dimension/2*Math.cos(y_degrees + Math.PI) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2);
//     vertices['X'][0] = cube_dimension/2*Math.cos(y_degrees + Math.PI) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2);

//     vertices['C'][0] = cube_dimension/2*Math.cos(y_degrees) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2 + Math.PI);
//     vertices['V'][0] = cube_dimension/2*Math.cos(y_degrees) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2 + Math.PI);
//     vertices['D'][0] = cube_dimension/2*Math.cos(y_degrees + Math.PI) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2 + Math.PI);
//     vertices['U'][0] = cube_dimension/2*Math.cos(y_degrees + Math.PI) - cube_dimension/2*Math.cos(y_degrees + Math.PI/2 + Math.PI);
    
    
    
 
//     vertices['A'][1] = cube_dimension/2*Math.sin(x_degrees) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2);
//     vertices['B'][1] = cube_dimension/2*Math.sin(x_degrees) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2);
//     vertices['C'][1] = cube_dimension/2*Math.sin(x_degrees + Math.PI) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2);
//     vertices['D'][1] = cube_dimension/2*Math.sin(x_degrees + Math.PI) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2);
    

//     vertices['U'][1] = cube_dimension/2*Math.sin(x_degrees + Math.PI) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2 + Math.PI);
//     vertices['V'][1] = cube_dimension/2*Math.sin(x_degrees + Math.PI) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2 + Math.PI);
//     vertices['W'][1] = cube_dimension/2*Math.sin(x_degrees) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2 + Math.PI);
//     vertices['X'][1] = cube_dimension/2*Math.sin(x_degrees) - cube_dimension/2*Math.sin(x_degrees + Math.PI/2 + Math.PI);
    
//     console.log()
//     console.log("================")
//     console.log(`X Degrees ${x_slider.value}`);
//     console.log(`X Radians ${x_degrees}`);
//     console.log(`Total cube height: ${vertices['A'][1] + vertices['C'][0]}`)
//     console.log(`A: ${vertices['A']}`);
//     console.log(`B: ${vertices['B']}`);
//     console.log(`C: ${vertices['C']}`);
//     console.log(`D: ${vertices['D']}`);
//     console.log(`U: ${vertices['U']}`);
//     console.log(`V: ${vertices['V']}`);
//     console.log(`W: ${vertices['W']}`);
//     console.log(`X: ${vertices['X']}`);
//     console.log("================")
//     setVertexValues()
// }

// function degToRad(degrees) {
//   return degrees * (Math.PI / 180);
// }

// function radToDeg(rad) {
//   return rad * (180 / Math.PI);
// }



var x_slider = document.getElementById("x-slider");
var y_slider = document.getElementById("y-slider");
var z_slider = document.getElementById("z-slider");

var x_output = document.getElementById("x-text");
var y_output = document.getElementById("y-text");
var z_output = document.getElementById("z-text");
x_output.value = x_slider.value;
y_output.value = y_slider.value;
z_output.value = z_slider.value;

// Update the current slider value (each time you drag the slider handle)
x_slider.oninput = function() {
    x_output.value = this.value;
    calculateVertexValues();
}
y_slider.oninput = function() {
    y_output.value = this.value;
    calculateVertexValues();
}
z_slider.oninput = function() {
    z_output.value = this.value;
    calculateVertexValues();
}

x_output.oninput = function() {
    console.log(this.value);
    if (this.value > 360)
    {
        this.value = 360;
    }
    else if (this.value < 0)
    {
        this.value = 0;
    }
    x_slider.value = this.value;
    calculateVertexValues();
}
y_output.oninput = function() {
    if (this.value > 360)
    {
        this.value = 360;
    }
    else if (this.value < 0)
    {
        this.value = 0;
    }
    y_slider.value = this.value;
    calculateVertexValues();
}
z_output.oninput = function() {
    if (this.value > 360)
    {
        this.value = 360;
    }
    else if (this.value < 0)
    {
        this.value = 0;
    }
    z_slider.value = this.value;
    calculateVertexValues();
}



main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#gl-canvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}