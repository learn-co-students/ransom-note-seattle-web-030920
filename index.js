function buildHistogram(mag) {
    const hash = {}
    mag.forEach(char => {
        if (hash[char]) {
            hash[char] += 1
        } else {
            hash[char] = 1
        }
    })
    return hash
}

function canBuildNote(mag, note) {
    const hash = buildHistogram(mag)
    const noteArr = note.split("")
    for (let c = 0; c < noteArr.length; c++) {
        if (!hash[noteArr[c]]) {
            return false
        } else {
            hash[noteArr[c]] -= 1
        }
    }
    return true
}
