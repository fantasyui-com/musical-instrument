// import dibber from '../../node_modules/dibber/index.mjs';
// import * as foo from '../../node_modules/tone/build/Tone.js'

function playInstrument(setup){


  const tonePlayers = {};
  const noteNames = [];

  setup.instrument.forEach(function(sound, index){
    const noteName = 'sound'+index;
    tonePlayers['sound'+index] = sound;
    noteNames.push(noteName);
  })

  const matrix = setup.sequence;
  console.log(tonePlayers)
  console.log(noteNames)
  console.log(matrix)
  console.log('matrix.length',matrix.length)

  // when instruments load
    //setup a polyphonic sampler
    let keys = new Tone.Players(tonePlayers, { volume: 10, fadeOut: "64n", onload:function(){
      // 
      // console.log('INSTRUMENTS LOADED')
      // //keys.fadeOut.value = "64n";

      //the notes

      var  loop = new Tone.Sequence(function(time, col) {
        let column = matrix[col];
        for (let i = 0; i < noteNames.length; i++) {
          if (column[i] != 0) {
            //slightly randomized velocities
            let vel = Math.random() * 0.5 + 0.5;
            keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
          }
        }


      }, Array.from({ length: matrix.length }, (x, i) => i), "16n");

      Tone.Transport.bpm.value = 80;
      Tone.Transport.start();
      console.log('Loop Start was called')
      loop.start();


  } }).toMaster();


}

export default function play(song) {

  const ensemble = Object.keys(song.data);
  ensemble.forEach(function(instrument){
    playInstrument(song.data[instrument]);
  });
}
