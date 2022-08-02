const natural = require('natural')
const _c = require('util').inspect.colors;

Object.keys(_c).forEach(c =>global[c] = s =>`\x1b[${_c[c][0]}m${s}\x1b[${_c[c][1]}m`);

// Initiate terminal.
natural.BayesClassifier.load('./trained/class.json', null, (err, classifier) => {
    if(err) {
        console.error("Error occured in the Stani Terminal:")
        throw new Error(err)
    }

    console.log(green("[S][T][A][N][I] [T][E][R][M][I][N][A][L] MK.69"))
    console.log("> Enter the contents of a Stani tweet for classification:")
    process.stdin.on('data', (data) => {
        let stringified = data.toString()
        console.log(green(`> This tweet is ${classifier.classify(stringified) == "cringe" ? "cringe asf" : "stupid, nobody asked"}`))
    })
})