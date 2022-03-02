var robot = require("robotjs");  

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function pls({cmd, ms}){
    robot.typeString(`pls ${cmd}`);
    robot.keyTap("enter");
    await sleep(ms);
}

(async function(){
    console.log('\nGo to discord now.')
    console.log('Typing begins in 5s.\n')
    let rounds = 0;
    await sleep(5000);
    while(true){
        await pls({cmd: 'beg', ms: 1000})
        await pls({cmd: 'dig', ms: 1000})
        await pls({cmd: 'fish', ms: 1000})
        await pls({cmd: 'hunt', ms: 1000})
        await sleep(42000);
        console.log(`commands run ${++rounds} times.`)
    }
})()
