function buildHistogram(array) {
  const histogram = {}
  array.forEach(l => {
    if (histogram[l]) {
      histogram[l] += 1;
    } else {
      histogram[l] = 1;
    }
  })
  return histogram
}

function canBuildNote(array, note) {
  let histogram = buildHistogram(array);
  const noteContent = note.split('').filter(letter => letter !== ' ');
  let answer = true;
  noteContent.forEach( key => {
    if (histogram[key]) {
      if (histogram[key] !== 0) {
        histogram[key] = histogram[key] - 1;
      } else {
        answer = false
      }
    } else {
      answer = false
    }
  })
  return answer
}
