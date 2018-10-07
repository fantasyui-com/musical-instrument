(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
Vue.customElement('widget-vue', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data: {
    message: 'Hello Vue!'
  },
  template: '<p>{{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</p>'
});

//
//
//
// const dibber = function(input) {
//   // ASSUME A STABLE (square) MATRIX
//   const rows = input.length;
//   const cols = input[0].length;
//   const response = Array.from({
//     length: cols
//   }, () => Array.from({
//     length: rows
//   }));
//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       response[col][row] = input[rows - row - 1][col];
//     }
//   }
//   return response;
// };
//
// var matrix1 = {
//   matrix: dibber([
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, ],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, ],
//     [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, ],
//     [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, ],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//   ])
// };
//
// //setup a polyphonic sampler
// var keys = new Tone.Players({
//   "agogoLow": "./tonejs-examples/audio/505/agogoLow.[mp3|ogg]",
//   "agogoHigh": "./tonejs-examples/audio/505/agogoHigh.[mp3|ogg]",
//   "A": "./tonejs-examples/audio/casio/A1.[mp3|ogg]",
//   "C#": "./tonejs-examples/audio/casio/Cs2.[mp3|ogg]",
//   "E": "./tonejs-examples/audio/casio/E2.[mp3|ogg]",
//   "F#": "./tonejs-examples/audio/casio/Fs2.[mp3|ogg]",
//
//   // "A" : "./tonejs-examples/audio/salamander/A0.[mp3|ogg]",
//   // "C#" : "./tonejs-examples/audio/salamander/C1.[mp3|ogg]",
//   // "E" : "./tonejs-examples/audio/salamander/Ds1.[mp3|ogg]",
//   // "F#" : "./tonejs-examples/audio/salamander/Fs1.[mp3|ogg]",
// }, {
//   volume: 10,
//   fadeOut: "64n",
//   onload: function() {
//
//     keys.fadeOut.value = "64n";
//
//     //the notes
//     var noteNames = ["F#", "E", "C#", "A", "agogoHigh", "agogoLow"];
//
//     var loop = new Tone.Sequence(function(time, col) {
//
//       var column = matrix1.matrix[col];
//       for (var i = 0; i < noteNames.length; i++) {
//         if (column[i] != 0) {
//           //slightly randomized velocities
//           var vel = Math.random() * 0.5 + 0.5;
//           keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
//         }
//       }
//
//
//     }, Array.from({
//       length: matrix1.matrix.length
//     }, (x, i) => i), "16n");
//
//     Tone.Transport.start();
//     Tone.Transport.bpm.value = 80;
//     loop.start();
//     console.log('Loop Start was called')
//
//   }
// }).toMaster();

},{}]},{},[1]);
