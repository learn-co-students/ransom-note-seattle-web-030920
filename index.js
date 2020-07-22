function buildHistogram(mag) {
    let histogram = {}
    mag.forEach(l => {
      if (histogram[l]) {
        histogram[l] += 1;
      } else {
        histogram[l] = 1;
      }
    })
    return histogram
  }
  
  function canBuildNote(mag, note) {
    let histogram = buildHistogram(mag);
    let answer = true
    note.split('').filter(letter => letter !== ' ').forEach( key => {
      if (histogram[key] && histogram[key] !== 0) {
          histogram[key] = histogram[key] - 1;
      } else {
        answer= false
      }
    })
    return answer
  }