const canvas = document.getElementById('renderSurface')
let myFluid = new Fluid(canvas);
// myFluid.mapBehaviours({
//     paused: false,
//     pressure: 0.8,
//     curl: 10

// })
myFluid.activate();