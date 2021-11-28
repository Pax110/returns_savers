const returnSaversLogic = require('./returnSavers')

// let testId = "61a3f95beee755470cc19166"
// async const returnLogic = (req, res) => {
//    let returnResult = await returnSaversLogic.findById(testId)
//    console.log(returnResult)

// }
// let answerOne = 'Better price available'
// let answerTwo = 'Bought it by mistake'
// let answerThree = 'Items arrived too late'


function returnLogic (answerOne,answerTwo,answerThree) {
    let status = null

    if(answerOne ===  'Bought it by mistake' && answerTwo==='Items arrived too late' && answerThree ==='Better price available' ){
        status = 'Appr'
    }
    else if(answerOne !=  'Bought it by mistake' || answerTwo !='Items arrived too late' || answerThree !='Better price available'){
         status = "Declined"
    }
    console.log(status)
    return status
}



module.exports ={ returnLogic}