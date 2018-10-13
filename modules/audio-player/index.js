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
    let playerKeys = new Tone.Players(tonePlayers, { volume: 10, fadeOut: "64n", onload: function(){
      //
      // console.log('INSTRUMENTS LOADED')
      // //keys.fadeOut.value = "64n";

      //the notes
      const dataToLoopOver = Array.from({ length: matrix.length }, (x, i) => i);
       const loop = new Tone.Sequence(function(time, columnNumber) {

        let columnData = matrix[columnNumber];

        for (let i = 0; i < noteNames.length; i++) {

          if (columnData[i] === 1) {
            //slightly randomized velocities
            let randomizedVelocity = Math.random() * 0.5 + 0.5;
            playerKeys.get(noteNames[i]).start(time, 0, "1n", 0, randomizedVelocity);
          }
        }

      }, dataToLoopOver, "16n");

      Tone.Transport.bpm.value = 80;
      //Tone.Transport.sync().start(0);;
      Tone.Transport.start();

      loop.start();
      window.musicalInstrumentLoops.push(loop);

      playerKeys.sync().start(0);

  } }).toMaster();


}

export default function play(song) {
  if(!window.musicalInstrumentLoops) window.musicalInstrumentLoops = [];

  window.musicalInstrumentLoops.forEach(function(loop){
    loop.stop();
  });

  const ensemble = Object.keys(song.data);

  ensemble.forEach(function(instrument){
    const setup = song.data[instrument];
    playInstrument(setup);
  });


}
