var ffmpeg = require('fluent-ffmpeg')
  , fs = require('fs')

var outStream = fs.createWriteStream('./resources/output.mp3');

ffmpeg()
  .input('./resources/input.ogg')
  .audioQuality(96)
  .toFormat("mp3")
  .on('error', error => console.log(`Encoding Error: ${error.message}`))
  .on('exit', () => console.log('Audio recorder exited'))
  .on('close', () => console.log('Audio recorder closed'))
  .on('end', () => console.log('Audio Transcoding succeeded !'))
  .pipe(outStream, { end: true });
