const jsonfile = require('jsonfile');
const FILE_PATH = './data.json'
const moment = require('moment');
const random = require('random')
const simpleGit = require('simple-git')

const makeCommit  = n => {
    const x = random.int(0, 54); 
    const y     = random.int(0, 6)
    const DATE = moment().subtract(1, 'y').add(1, 'd')
        add(x, 'w').add(y, 'd').format()
    data =  {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH , data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date' : DATE}).push();
        makeCommit.bind(this, --n)

    });
}
makeCommit(120)