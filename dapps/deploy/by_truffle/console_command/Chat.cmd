/*@CONTRACT: Chat */
Chat.address
Chat.deployed().then(ret=>instance=ret)
web3.eth.getAccounts().then(ret=>accounts=ret)

instance.GetDeployer().then(ret=>result=ret)

text = "ppp"
text = "qqq"
xFrom = accounts[1]
xTo = accounts[2]

instance.SetText(xTo,text,{from:xFrom,value:10}).then()

instance.GetMessageNum(xTo).then(ret=>result=ret)

instance.GetText(xTo,0).then(ret=>result=ret)
instance.GetText(xTo,1).then(ret=>result=ret)

instance.Withdraw(0,{from:xTo}).then(ret=>result=ret)
instance.Withdraw(1,{from:xTo}).then(ret=>result=ret)

.exit

