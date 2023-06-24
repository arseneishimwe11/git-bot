const jsonfile = require('jsonfile');
const FILE_PATH = './data.json';
const moment = require('moment');
const simpleGit = require('simple-git');

// Function to generate a random number between min and max
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const makeCommit = n => {
    if (n <= 0) {
        return;
    }

    const x = getRandomInt(0, 54);
    const y = getRandomInt(0, 6);
    const DATE = moment().subtract(1, 'y').add(1, 'd')
        .add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }

    console.log(`Committing with date: ${DATE}`);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push(() => {
            makeCommit(n - 1);
        });
    });
}

const numberOfCommits = 120; 
makeCommit(numberOfCommits);
