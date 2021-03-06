import wrap from '../../node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js';
import musicalNotation from '../../node_modules/musical-notation/index.mjs';
import dibber from '../../node_modules/dibber/index.mjs';

// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


let customElementRegistry = window.customElements;

customElementRegistry.define('audio-sequencer', wrap(Vue, {

  template: '#audio-sequencer',

  props: [
    'type',
    'title',
    'pattern',
    'audio',
  ],

  data: function () {
    return {

      // Data
      sequence:'[----][----][----][----]\n[----][----][----][----]\n[----][----][----][----]\n[----][----][----][----]\n[----][----][----][----]\n',
      instrument:'/tonejs-examples/audio/505/agogoLow.[mp3|ogg]\n/tonejs-examples/audio/505/agogoHigh.[mp3|ogg]\n/tonejs-examples/audio/casio/A1.[mp3|ogg]\n/tonejs-examples/audio/casio/Cs2.[mp3|ogg]\n/tonejs-examples/audio/casio/E2.[mp3|ogg]\n',

      // UI State
      loaded: false,
      expanded: false,
    }
  },

  methods: {

    save: function (event) {

      const {sequence, instrument} = this;

      // sequence needs to be split by \n\n

      const sequences = sequence.split(/\n{2,}/)
      .map(sequence=>musicalNotation(sequence.split('\n').filter(i=>!i.match(/^\s*\/\//)).join('\n')))
      .map(sequence=>dibber(sequence.reverse()))
      .reduce(function(accumulator, currentValue) {
        return accumulator.concat(currentValue);
      }, [] );


      this.$emit('updated',{
        instrument:instrument.split(/\n/).map(i=>i.trim()).filter(i=>i).filter(i=>!i.match(/^\s*\/\//))
        ,
        //sequence:dibber(musicalNotation(sequence))
        sequence:sequences
      })


    },

    expand: function (event) {
      this.expanded = !this.expanded;
    }
  },

  created () {
    //console.log('created')
  },
  mounted () {
    //console.log('mounted', this)
    if(this.pattern) this.sequence = this.pattern.replace(/\\n|#/g,'\n').split("\n").map(i=>i.trim())  .join("\n")
    if(this.audio) this.instrument = this.audio.replace(/\\n|#/g,'\n').split("\n").map(i=>i.trim())  .join("\n")
    this.save();
  },
  activated () {
    //console.log('activated');
  },
  deactivated () {
    console.log('deactivated')
  }
}))

window.el = document.querySelector('audio-sequencer')


export default function foo() {

}

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
