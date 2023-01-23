# What is this?
    A library to check the transaction status on xdc network

# Installation
    `npm install xdc-txn-status-checker --save`

# Code usage

    //For React
    import {statusChecker} from 'xdc-txn-status-checker';

    //For Nodejs
    const {statusChecker} = require('xdc-txn-status-checker');

    statusChecker(["0x025f567bbfb962f960a72af418088021f7b8f55b12ba7c3b493188ad4430d267", "0xb511732d5000f5d227994ae69905bca5a833df4a20107b43a7e238dfc75d6f5b"], "apothem")
    .then(result=>{
        console.log("output",result)
    }).catch(err=>{
        console.log("err",err)
    })

## Options

    Status Checker needs two parameter first one is transaction array and another one is network type both of them are mandatory

- *Network Type* - mainnet,apothem.



