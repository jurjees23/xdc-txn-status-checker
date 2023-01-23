var Web3 = require('web3');
var networkType = ["mainnet", "apothem"]
async function statusChecker(array, type) {
    if (!Array.isArray(array)) {
        throw new Error('Send Transaction Hash in Array')

    }
    if (networkType.indexOf(type) == -1) {
        throw new Error('Network Type Not Exists')

    }
    var RPCURL;
    if (type == "mainnet") {
        RPCURL = "https://xdcpayrpc.blocksscan.io/"
    } else if (type == "apothem") {
        RPCURL = "https://apothemxdcpayrpc.blocksscan.io/"

    }
    var web3Type = new Web3(new Web3.providers.HttpProvider(RPCURL));
    var results = [];
    var arrayResult = array.map(async result => {
        await web3Type.eth.getTransactionReceipt(result, (err, txReceipt) => {
            if (txReceipt === null) {
                var obj = { "txnHash": result, "Status": null }
                results.push(obj);
            }
            else if (typeof txReceipt === 'undefined') {
                var obj = { "txnHash": result, "Status": null }
                results.push(obj);

            } else {
                var obj = { "txnHash": result, "Status": txReceipt.status }
                results.push(obj);
            }
        })

    })

    var output = await Promise.all(arrayResult);
    return results;
}

module.exports.statusChecker = statusChecker;
// statusChecker(["0x025f567bbfb962f960a72af418088021f7b8f55b12ba7c3b493188ad4430d267", "0xb511732d5000f5d227994ae69905bca5a833df4a20107b43a7e238dfc75d6f5b"], "apothem")
//     .then(result => {
//         console.log("output", result)
//     }).catch(err => {
//         console.log("err", err)
//     })
