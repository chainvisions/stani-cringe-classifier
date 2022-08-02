const natural = require('natural')
let classifier = new natural.BayesClassifier()

// List of cringe and nobody asked tweets
classifier.addDocument("Incredible venue for ETHMexico 🇲🇽 🌵🌱Apply to hack on @LensProtocol & @AaveAave 🏗", "nobodyAsked")
classifier.addDocument("It's @parisrouz ✨", "cringe")
classifier.addDocument("Aave socks at 100% utilization rate", "cringe")
classifier.addDocument("Since @jack is going to build Aave on Bitcoin, Aave should build Twitter on Ethereum", "cringe")
classifier.addDocument("What do degens 🦍s eat for lunch? @parisrouz", "cringe")
classifier.addDocument("We, as the members of the web3 community, are responsible for the culture we breed. Building inclusive and friendly community makes our world a better place to build and use products we love.", "cringe")
classifier.addDocument("GHO shall be accepted here 👻", "nobodyAsked")
classifier.addDocument("Proposal by @lemiscate to freeze Fantom Market due to unbalanced risk/reward. tl;dr Fantom market isn't yielding sufficient revenue to the AaveDAO considering the risk involved with bridges today", "nobodyAsked")
classifier.addDocument("BREAKING: The @AaveAave team submitted ARC to launch a self-sovereign overcollateralized stablecoin GHO backed by the Aave Protocol collaterals 👻 👇🏼", "nobodyAsked")

classifier.train()
classifier.save('./trained/class.json')