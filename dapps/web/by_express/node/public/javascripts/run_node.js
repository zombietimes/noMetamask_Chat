var ZTIMES = ZTIMES || {};
ZTIMES.UTL = {
  init: function(){
    console.log("ZTIMES.UTL.init()");
  },
  test: function(){
    console.log("ZTIMES.UTL.test()");
  },
  GetRandom: function(rangeMax){
    return Math.floor( Math.random() * rangeMax );
  },
  ToStr: function(num){
    return num.toString(10);
  },
  FillZero2: function(num){
    return ("0"+num).slice(-2);
  },
  GetTimeStamp: function(){
    const date = new Date();
    const year = date.getFullYear();
    const month = this.FillZero2(date.getMonth()+1);
    const day = this.FillZero2(date.getDate());
    const hour = this.FillZero2(date.getHours());
    const minute = this.FillZero2(date.getMinutes());
    const second = this.FillZero2(date.getSeconds());
    return (year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second);
  },
};
ZTIMES.ACCOUNTS = {
  init: function(){
    console.log("ZTIMES.ACCOUNTS.init()");
    this.UNIT = new ZTIMES.ACCOUNTS.UNIT();
    this.SELF = new ZTIMES.ACCOUNTS.DB("#SELF",false);
    this.PEER = new ZTIMES.ACCOUNTS.DB("#PEER",true);
  },
  test: function(){
    console.log("ZTIMES.ACCOUNTS.test()");
  },
  UNIT: function(){},
  DB: function(keyStorage,isBlank){
    this.keyStorage = keyStorage;
    this.xSelected = "";
    this.accounts = {};
    this.onLoad(isBlank);
  },
};
ZTIMES.ACCOUNTS.UNIT.prototype = {
  selected: "Wei",
  Change: function(unitOld){
    let unitNew = "Wei";
    if(unitOld === "Wei"){
      unitNew = "Ether";
    }
    else if(unitOld === "Ether"){
      unitNew = "Wei";
    }
    this.selected = unitNew;
    return unitNew;
  },
  Get: function(){
    return this.selected;
  },
  GetAmountText: function(amount,unit){
    const amountText = amount + ' ' + unit;
    return amountText;
  },
  GetAmount: function(amountText){
    const textList = amountText.split(' ');
    const amount = textList[0];
    const unit = textList[1];
    return Number(amount);
  },
};
ZTIMES.ACCOUNTS.DB.prototype = {
  onLoad: function(isBlank){
    if(typeof(Storage) === "undefined"){
      console.log("Not supported.");
      return;
    }
    this.accounts = this.storageReadAll();
    if(isBlank === true){
      this.addInit();
      this.xSelected = "";
    }
    else{
      this.xSelected = this.getFirst();
    }
  },
  addInit: function(){
    const xAddress = "";
    const name = "";
    this.accounts[xAddress] = {"name":name};
  },
  storageReadAll: function(){
    const accounts = JSON.parse(localStorage.getItem(this.keyStorage));
    if(accounts === null){
      return {};
    }
    return accounts;
  },
  storageWrite: function(xAddress,name){
    const accounts = JSON.parse(localStorage.getItem(this.keyStorage));
    if(accounts === null){
      const accountsNew = {};
      accountsNew[xAddress] = {"name":name};
      localStorage.setItem(this.keyStorage,JSON.stringify(accountsNew));
    }
    else{
      accounts[xAddress] = {"name":name};
      localStorage.setItem(this.keyStorage,JSON.stringify(accounts));
    }
  },
  Set: function(xAddress,name){
    if(this.isValidAddress(xAddress) === false){
      return;
    }
    if(this.isValidName(name) === false){
      return;
    }
    this.accounts[xAddress] = {"name":name};
    this.xSelected = xAddress;
    this.storageWrite(xAddress,name);
  },
  isValidAddress: function(xAddress){
    if(xAddress === ""){
      alert("Invalid address.");
      return false;
    }
    const result = ZTIMES.BLOCKCHAIN.IsAddress(xAddress);
    if(result === null){
      alert("Invalid address.");
      return false;
    }
    return true;
  },
  isValidName: function(name){
    if(name === ""){
      return true;
    }
    const result = name.match(/^[\w\d\s]{1,32}$/gm);
    if(result === null){
      alert("Invalid name.");
      return false;
    }
    return true;
  },
  GetSelected: function(){
    const xAddress = this.xSelected;
    if(xAddress === ""){
      return {"xAddress":"","name":""};
    }
    else{
      const name = this.accounts[xAddress].name;
      return {"xAddress":xAddress,"name":name};
    }
  },
  GetPrevious: function(){
    let xAddressPrevious = "#NONE";
    for(let xAddress in this.accounts){
      if(xAddress === this.xSelected){
        break;
      }
      xAddressPrevious = xAddress;
    }
    if(xAddressPrevious === "#NONE"){
      xAddressPrevious = this.getLast();
    }
    this.xSelected = xAddressPrevious;
    return this.GetSelected();
  },
  GetNext: function(){
    let isSelected = false;
    let xAddressNext = "#NONE";
    for(let xAddress in this.accounts){
      if(isSelected == true){
        xAddressNext = xAddress;
        break;
      }
      if(xAddress === this.xSelected){
        isSelected = true;
      }
    }
    if(xAddressNext === "#NONE"){
      xAddressNext = this.getFirst();
    }
    this.xSelected = xAddressNext;
    return this.GetSelected();
  },
  getFirst: function(){
    let xAddressFirst = "";
    for(let xAddress in this.accounts){
      xAddressFirst = xAddress;
      break;
    }
    return xAddressFirst;
  },
  getLast: function(){
    let xAddressLast = "";
    for(let xAddress in this.accounts){
      xAddressLast = xAddress;
    }
    return xAddressLast;
  },
  GetName: function(xAddress){
    return this.accounts[xAddress].name;
  },
};

ZTIMES.BLOCKCHAIN = {
  web3Js: null,
  xAddressContract: null,
  instance: null,
  init: async function(){
    console.log("ZTIMES.BLOCKCHAIN.init()");
    if((typeof window.ethereum !== 'undefined')||(typeof window.web3 !== 'undefined')){
      // const provider = window['ethereum'] || window.web3.currentProvider;
      // this.web3Js = new Web3(provider);
      // ethereum.autoRefreshOnNetworkChange = false;
      // const accounts = await ethereum.enable()
      // console.log(accounts);
      // console.log("isMetaMask : " + ethereum.isMetaMask);
      // console.log("networkVersion : " + ethereum.networkVersion);
      // console.log("selectedAddress : " + ethereum.selectedAddress);
      console.log("MetaMask is not supported.");
    }
    else{
      console.log('<Ganache : web3>');
      const accessUrl = 'http://127.0.0.1:7545';
      const provider = new Web3.providers.HttpProvider(accessUrl);
      this.web3Js = new Web3(provider);
      this.initContract();
    }
  },
  test: function(){
    console.log("ZTIMES.BLOCKCHAIN.test()");
  },
  initContract: function(){
    const contractJson = this.getContractJson();
    const contractABI = contractJson["abi"];
    // const networkId = ethereum.networkVersion;
    const networkId = 5777;
    this.xAddressContract = contractJson["networks"][networkId].address;
    this.instance = new this.web3Js.eth.Contract(contractABI,this.xAddressContract);
    return this.instance;
  },
  getContractJson: function(){
    // @note: abiJson_xxxx.js is required.
    return AbiJson;
  },
  ContractCall: async function(strMethod,...params){
    let result = "";
    const method = this.getMethod(strMethod);
    const payload = this.getPayload(params);
    const applyMethod = method.apply(this,params);
    const applyCall = applyMethod.call.apply(this,payload);
    await applyCall.then(function(ret){
      result = ret;
    });
    return result;
  },
  ContractSend: async function(strMethod,...params){
    const method = this.getMethod(strMethod);
    const payload = this.getPayload(params);
    const applyMethod = method.apply(this,params);
    if(payload === undefined){
      await applyMethod.send().on("error",function(error){
        console.log(error);
      });
    }
    else{
      await applyMethod.send(payload).on("error",function(error){
        console.log(error);
      });
    }
  },
  getMethod: function(strMethod){
    const method = this.instance.methods[strMethod];
    return method;
  },
  getPayload: function(params){
    const paramsLast = params.slice(-1)[0];
    const type = Object.prototype.toString.call(paramsLast);
    if(type === "[object Object]"){   // pairs
      const payload = params.pop();
      return payload;
    }
    else{
      return undefined;
    }
  },
  ReadyWallet: function(password){
    const wallet = this.web3Js.eth.accounts.wallet.load(password);
    if(wallet.length === 0){
      const entropy = this.getEntropy();
      this.web3Js.eth.accounts.wallet.create(2,entropy);
      const walletLen = this.web3Js.eth.accounts.wallet.length;
      for(let cnt=0;cnt<walletLen;cnt+=1){
        const accountWallet = this.web3Js.eth.accounts.wallet[cnt];
        console.log(accountWallet);
        ZTIMES.ACCOUNTS.SELF.Set(accountWallet.address,"");
      }
      this.web3Js.eth.accounts.wallet.save(password);
    }
    else{
      const walletLen = wallet.length;
      for(let cnt=0;cnt<walletLen;cnt+=1){
        const accountWallet = wallet[cnt];
        console.log(accountWallet);
        const name = ZTIMES.ACCOUNTS.SELF.GetName(accountWallet.address);
        ZTIMES.ACCOUNTS.SELF.Set(accountWallet.address,name);
      }
    }
  },
  getEntropy: function(){
    // const entropy = '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534';
    const message = Math.random().toString();
    const entropy = this.web3Js.eth.accounts.hashMessage(message);
    return entropy;
  },
  ImportAcount: function(password,privateKey,address){
    this.web3Js.eth.accounts.wallet.add({
      privateKey: privateKey,
      address: address
    });
    ZTIMES.ACCOUNTS.SELF.Set(address,"");
    this.web3Js.eth.accounts.wallet.save(password);
  },
  GetBalance: async function (xAddress) {
    const balance = await this.web3Js.eth.getBalance(xAddress);
    return balance;
  },
  SendWei: async function(xSelf,xPeer,amount,gas){
    await this.web3Js.eth.sendTransaction({from:xSelf,to:xPeer,value:amount,gas:gas});
  },
  GetAmount: function(amountOld,unitNew){
    if(unitNew === "Wei"){
      return this.web3Js.utils.toWei(amountOld.toString(),'ether');
    }
    else if(unitNew === "Ether"){
      return this.web3Js.utils.fromWei(amountOld.toString(),'ether');
    }
    else{
      console.log("[ERR]GetAmount() unitNew:" + unitNew);
    }
  },
  IsAddress: function(xAddress){
    return this.web3Js.utils.isAddress(xAddress);
  }
};

ZTIMES.GUI = {
  init: function(){
    console.log("ZTIMES.GUI.init()");
    this.TABS = new ZTIMES.GUI.TABS();
    this.WALLET = new ZTIMES.GUI.WALLET();
    this.BALANCE = new ZTIMES.GUI.BALANCE();
    this.HISTORY = new ZTIMES.GUI.HISTORY();
    this.CONTRACT = new ZTIMES.GUI.CONTRACT();
    this.TABNUM = 4;
  },
  test: function(){
    console.log("ZTIMES.GUI.test()");
  },
  setup: function(){
  },
  keyDown: function(){
    return (this.isTouch ? 'touchstart':'mousedown');
  },
  keyMove: function(){
    return (this.isTouch ? 'touchmove':'mousemove');
  },
  keyUp: function(){
    return (this.isTouch ? 'touchend':'mouseup');
  },
  addKeyUp: function(id,action){
    try{
      document.getElementById(id).addEventListener(this.keyUp(),action,false);
    }
    catch(e){ console.log(e); }
    finally{}
  },
  addChange: function(id,action){
    try{
      document.getElementById(id).addEventListener('change',action,false);
    }
    catch(e){ console.log(e); }
    finally{}
  },
  editInnerText: function(id,text){
    try{
      document.getElementById(id).innerText = text;
    }
    catch(e){ console.log(e); }
    finally{}
  },
  editValueText: function(id,text){
    try{
      document.getElementById(id).value = text;
    }
    catch(e){ console.log(e); }
    finally{}
  },
  refValueText: function(id){
    try{
      return document.getElementById(id).value;
    }
    catch(e){ console.log(e); }
    finally{}
  },
  showDiv: function(id){
    try{
      const el = document.getElementById(id);
      el.style.display = "block";
    }
    catch(e){ console.log(e); }
    finally{}
  },
  hideDiv: function(id){
    try{
      const el = document.getElementById(id);
      el.style.display = "none";
    }
    catch(e){ console.log(e); }
    finally{}
  },
  TABS: function(){
    this.init();
  },
  WALLET: function(){
    this.init();
  },
  BALANCE: function(){
    this.init();
  },
  HISTORY: function(){
    this.init();
  },
  CONTRACT: function(){
    this.init();
  },
};
ZTIMES.GUI.TABS.prototype = {
  isReady: false,
  init: function(){
    ZTIMES.GUI.addKeyUp('iNode0L',async function(){
      ZTIMES.GUI.TABS.selectBlock(0);
      ZTIMES.GUI.WALLET.onLoad();
    },false);
    ZTIMES.GUI.addKeyUp('iNode1L',async function(){
      ZTIMES.GUI.TABS.selectBlock(1);
      if(ZTIMES.GUI.TABS.isReady === false){
        alert("Not ready. At first, push the botton Ready.");
        return;
      }
      ZTIMES.GUI.BALANCE.onLoad();
    },false);
    ZTIMES.GUI.addKeyUp('iNode2L',async function(){
      ZTIMES.GUI.TABS.selectBlock(2);
      if(ZTIMES.GUI.TABS.isReady === false){
        alert("Not ready. At first, push the botton Ready.");
        return;
      }
      ZTIMES.GUI.HISTORY.onLoad();
    },false);
    ZTIMES.GUI.addKeyUp('iNode3L',async function(){
      ZTIMES.GUI.TABS.selectBlock(3);
      if(ZTIMES.GUI.TABS.isReady === false){
        alert("Not ready. At first, push the botton Ready.");
        return;
      }
      ZTIMES.GUI.CONTRACT.onLoad();
    },false);
  },
  selectBlock: function(indexTab){
    for(let index=0;index<ZTIMES.GUI.TABNUM;index+=1){
      if(index === indexTab){
        ZTIMES.GUI.showDiv('iNodeBlock' + index);
      }
      else{
        ZTIMES.GUI.hideDiv('iNodeBlock' + index);
      }
    }
  },
};
ZTIMES.GUI.WALLET.prototype = {
  init: function(){
    ZTIMES.GUI.addKeyUp('iReady0',async function(){
      ZTIMES.GUI.editInnerText('iInfo0',"Processing...");
      setTimeout(ZTIMES.GUI.WALLET.timeoutReady0,100);
    },false);
    ZTIMES.GUI.addKeyUp('iImport0',async function(){
      ZTIMES.GUI.editInnerText('iInfo0',"Processing...");
      setTimeout(ZTIMES.GUI.WALLET.timeoutImport0,100);
    },false);
  },
  timeoutReady0: async function(){
    const password = ZTIMES.GUI.refValueText('iPassword0');
    await ZTIMES.BLOCKCHAIN.ReadyWallet(password);
    ZTIMES.GUI.TABS.isReady = true;
    ZTIMES.GUI.editInnerText('iInfo0',"Done.");
  },
  timeoutImport0: async function(){
    const privateKey = ZTIMES.GUI.refValueText('iPrivateKey0');
    const address = ZTIMES.GUI.refValueText('iAddress0');
    const password = ZTIMES.GUI.refValueText('iPassword0');
    await ZTIMES.BLOCKCHAIN.ImportAcount(password,privateKey,address);
    ZTIMES.GUI.editValueText('iPrivateKey0',"");
    ZTIMES.GUI.editValueText('iAddress0',"");
    ZTIMES.GUI.editInnerText('iInfo0',"Done.");
  },
  onLoad: function(){
  },
};
ZTIMES.GUI.BALANCE.prototype = {
  init: function(){
    ZTIMES.GUI.addKeyUp('iSelfPrevious1',async function(){
      ZTIMES.GUI.BALANCE.selfPrevious();
    },false);
    ZTIMES.GUI.addKeyUp('iSelfNext1',async function(){
      ZTIMES.GUI.BALANCE.selfNext();
    },false);
    ZTIMES.GUI.addKeyUp('iSelfSave1',async function(){
      ZTIMES.GUI.BALANCE.selfSave();
    },false);
    ZTIMES.GUI.addKeyUp('iPeerPrevious1',async function(){
      ZTIMES.GUI.BALANCE.peerPrevious();
    },false);
    ZTIMES.GUI.addKeyUp('iPeerNext1',async function(){
      ZTIMES.GUI.BALANCE.peerNext();
    },false);
    ZTIMES.GUI.addKeyUp('iPeerSave1',async function(){
      ZTIMES.GUI.BALANCE.peerSave();
    },false);
    ZTIMES.GUI.addKeyUp('iUnit1',async function(){
      ZTIMES.GUI.BALANCE.unitChange();
    },false);
    ZTIMES.GUI.addKeyUp('iSendNow1',async function(){
      ZTIMES.GUI.editInnerText('iInfo1',"Processing...");
      setTimeout(ZTIMES.GUI.BALANCE.timeoutSendNow1,100);
    },false);
    ZTIMES.GUI.addKeyUp('iRefresh1',async function(){
      ZTIMES.GUI.BALANCE.refresh();
    },false);
  },
  onLoad: function(){
    this.selfCurrent();
    this.peerCurrent();
    this.unitCurrent();
  },
  timeoutSendNow1: function(){
    ZTIMES.GUI.BALANCE.sendWei();
  },
  selfCurrent: async function(){
    const account = ZTIMES.ACCOUNTS.SELF.GetSelected();
    const name = account.name;
    const xAddress = account.xAddress;
    const balance = await ZTIMES.BLOCKCHAIN.GetBalance(xAddress);
    const unit = ZTIMES.ACCOUNTS.UNIT.Get();
    if(unit === "Wei"){
      const amountText = ZTIMES.ACCOUNTS.UNIT.GetAmountText(balance,unit);
      ZTIMES.GUI.editValueText('iSelfAmount1',amountText);
    }
    else if(unit === "Ether"){
      const balanceNew = ZTIMES.BLOCKCHAIN.GetAmount(balance,unit);
      const amountText = ZTIMES.ACCOUNTS.UNIT.GetAmountText(balanceNew,unit);
      ZTIMES.GUI.editValueText('iSelfAmount1',amountText);
    }
    ZTIMES.GUI.editValueText('iSelfName1',name);
    ZTIMES.GUI.editValueText('iSelfAddr1',xAddress);
  },
  selfPrevious: function(){
    ZTIMES.ACCOUNTS.SELF.GetPrevious();
    this.selfCurrent();
  },
  selfNext: function(){
    ZTIMES.ACCOUNTS.SELF.GetNext();
    this.selfCurrent();
  },
  selfSave: function(){
    const xAddress = ZTIMES.GUI.refValueText('iSelfAddr1');
    const name = ZTIMES.GUI.refValueText('iSelfName1');
    ZTIMES.ACCOUNTS.SELF.Set(xAddress,name);
  },
  peerCurrent: async function(){
    const account = ZTIMES.ACCOUNTS.PEER.GetSelected();
    const name = account.name;
    const xAddress = account.xAddress;
    ZTIMES.GUI.editValueText('iPeerName1',name);
    ZTIMES.GUI.editValueText('iPeerAddr1',xAddress);
  },
  peerPrevious: function(){
    ZTIMES.ACCOUNTS.PEER.GetPrevious();
    this.peerCurrent();
  },
  peerNext: function(){
    ZTIMES.ACCOUNTS.PEER.GetNext();
    this.peerCurrent();
  },
  peerSave: function(){
    const xAddress = ZTIMES.GUI.refValueText('iPeerAddr1');
    const name = ZTIMES.GUI.refValueText('iPeerName1');
    ZTIMES.ACCOUNTS.PEER.Set(xAddress,name);
  },
  unitCurrent: function(){
    const unit = ZTIMES.ACCOUNTS.UNIT.Get();
    ZTIMES.GUI.editInnerText('iUnit1',unit);
  },
  unitChange: function(){
    const unitOld = ZTIMES.ACCOUNTS.UNIT.Get();
    const unitNew = ZTIMES.ACCOUNTS.UNIT.Change(unitOld);
    ZTIMES.GUI.editInnerText('iUnit1',unitNew);
    const amountTextOld = ZTIMES.GUI.refValueText('iSelfAmount1');
    const amountSelfOld = ZTIMES.ACCOUNTS.UNIT.GetAmount(amountTextOld);
    const amountSelfNew = ZTIMES.BLOCKCHAIN.GetAmount(amountSelfOld,unitNew);
    const amountTextNew = ZTIMES.ACCOUNTS.UNIT.GetAmountText(amountSelfNew,unitNew);
    ZTIMES.GUI.editValueText('iSelfAmount1',amountTextNew);
    const amountSendOld = ZTIMES.GUI.refValueText('iAmountSend1');
    const amountSendNew = ZTIMES.BLOCKCHAIN.GetAmount(amountSendOld,unitNew);
    ZTIMES.GUI.editValueText('iAmountSend1',amountSendNew);
  },
  sendWei: async function(){
    const xSelf = ZTIMES.GUI.refValueText('iSelfAddr1');
    if(xSelf === ""){
      alert("Invalid address.");
      return;
    }
    const xPeer = ZTIMES.GUI.refValueText('iPeerAddr1');
    if(xPeer === ""){
      alert("Invalid address.");
      return;
    }
    const amountText = ZTIMES.GUI.refValueText('iAmountSend1');
    const amount = ZTIMES.ACCOUNTS.UNIT.GetAmount(amountText);
    if(amount === 0){
      alert("Invalid amount.");
      return;
    }
    const unit = ZTIMES.ACCOUNTS.UNIT.Get();
    const wei = (unit === "Wei") ? amount : ZTIMES.BLOCKCHAIN.GetAmount(amount,"Wei");
    const gas = '5000000';
    await ZTIMES.BLOCKCHAIN.SendWei(xSelf,xPeer,wei,gas);
    const text = ZTIMES.GUI.HISTORY.addSent(xSelf,xPeer,wei);
    ZTIMES.GUI.editInnerText('iInfo1',text);
    this.peerSave();
    this.selfCurrent();
  },
  refresh: async function(){
    this.selfCurrent();
  },
};
ZTIMES.GUI.HISTORY.prototype = {
  historyList: [],
  pageNo: 0,
  rowMax: 4,
  init: function(){
    ZTIMES.GUI.addKeyUp('iPrevious2',async function(){
      ZTIMES.GUI.HISTORY.previous();
    },false);
    ZTIMES.GUI.addKeyUp('iNext2',async function(){
      ZTIMES.GUI.HISTORY.next();
    },false);
    this.keyStorage = "#HISTORY";
  },
  onLoad: function(){
    if(typeof(Storage) === "undefined"){
      console.log("Not supported.");
      return;
    }
    this.historyList = this.storageRead();
    this.show();
  },
  storageRead: function(){
    const historyList = JSON.parse(localStorage.getItem(this.keyStorage));
    if(historyList === null){
      return [];
    }
    return historyList;
  },
  storageWrite: function(historyList){
    localStorage.setItem(this.keyStorage,JSON.stringify(historyList));
  },
  previous: function(){
    if(this.pageNo > 0){
      this.pageNo -= 1;
    }
    else{
      this.pageNo = 0;
    }
    this.show();
  },
  next: function(){
    const indexMax = this.historyList.length;
    const pageNoMax = indexMax / this.rowMax;
    if(this.pageNo + 1 < pageNoMax){
      this.pageNo += 1;
    }
    this.show();
  },
  addSent: function(xSelf,xPeer,wei){
    const time = ZTIMES.UTL.GetTimeStamp();
    const text = time + "\nSent : " + wei + " wei\nself : " + xSelf + "\npeer : " + xPeer + "\n";
    this.historyList.unshift(text);
    this.storageWrite(this.historyList);
    this.show();
    return text;
  },
  addContract: function(info){
    const time = ZTIMES.UTL.GetTimeStamp();
    const text = time + "\nContract : " + info;
    this.historyList.unshift(text);
    this.storageWrite(this.historyList);
    this.show();
    return text;
  },
  show: function(){
    const indexMax = this.historyList.length;
    const indexList = this.getIndexList();
    for(let cnt=0; cnt<this.rowMax; cnt+=1){
      const idTag = 'iHistory' + cnt;
      const index = indexList + cnt;
      if(index + 1 > indexMax){
        ZTIMES.GUI.editInnerText(idTag,"");
      }
      else{
        const text = this.historyList[index];
        ZTIMES.GUI.editInnerText(idTag,text);
      }
    }
    ZTIMES.GUI.editInnerText('iPage2',this.pageNo);
  },
  getIndexList: function(){
    const indexList = this.pageNo * this.rowMax;
    return indexList;
  },
};
ZTIMES.GUI.CONTRACT.prototype = {
  init: function(){
    ZTIMES.GUI.addKeyUp('iSelfPrevious3',async function(){
      ZTIMES.GUI.CONTRACT.selfPrevious();
    },false);
    ZTIMES.GUI.addKeyUp('iSelfNext3',async function(){
      ZTIMES.GUI.CONTRACT.selfNext();
    },false);
    ZTIMES.GUI.addKeyUp('iPeerPrevious3',async function(){
      ZTIMES.GUI.CONTRACT.peerPrevious();
    },false);
    ZTIMES.GUI.addKeyUp('iPeerNext3',async function(){
      ZTIMES.GUI.CONTRACT.peerNext();
    },false);
    ZTIMES.GUI.addKeyUp('iSendBtn3',async function(){
      ZTIMES.GUI.editInnerText('iInfo3',"Processing...");
      setTimeout(ZTIMES.GUI.CONTRACT.timeoutSendBtn3,100);
    },false);
    ZTIMES.GUI.addKeyUp('iRecvBtn3',async function(){
      ZTIMES.GUI.editInnerText('iInfo3',"Processing...");
      setTimeout(ZTIMES.GUI.CONTRACT.timeoutRecvBtn3,100);
    },false);
    ZTIMES.GUI.addKeyUp('iWithDrawBtn3',async function(){
      ZTIMES.GUI.editInnerText('iInfo3',"Processing...");
      setTimeout(ZTIMES.GUI.CONTRACT.timeoutWithDrawBtn3,100);
    },false);
  },
  onLoad: function(){
    this.selfCurrent();
    this.peerCurrent();
  },
  timeoutSendBtn3: async function(){
    const xTo = ZTIMES.GUI.refValueText('iPeerAddr3');
    const rawText = ZTIMES.GUI.refValueText('iSendText3');
    const result = await ZTIMES.CONTRACT_BODY.SetText(xTo,rawText);
    const text = ZTIMES.GUI.HISTORY.addContract(result.info);
    ZTIMES.GUI.editInnerText('iInfo3',text);
  },
  timeoutRecvBtn3: async function(){
    const messageNum = await ZTIMES.CONTRACT_BODY.GetMessgeNum();
    if(messageNum >= 1){
      const messsageIndex = messageNum - 1;
      const result = await ZTIMES.CONTRACT_BODY.GetText(messsageIndex);
      ZTIMES.GUI.editValueText('iFromAddr3',result.xFrom);
      ZTIMES.GUI.editValueText('iFromText3',result.rawText);
      const text = ZTIMES.GUI.HISTORY.addContract(result.info);
      ZTIMES.GUI.editInnerText('iInfo3',text);
    }
    else{
      ZTIMES.GUI.editInnerText('iInfo3',"No message.");
    }
  },
  timeoutWithDrawBtn3: async function(){
    const messageNum = await ZTIMES.CONTRACT_BODY.GetMessgeNum();
    if(messageNum >= 1){
      const messsageIndex = messageNum - 1;
      const result = await ZTIMES.CONTRACT_BODY.Withdraw(messsageIndex);
      const text = ZTIMES.GUI.HISTORY.addContract(result.info);
      ZTIMES.GUI.editInnerText('iInfo3',text);
    }
    else{
      ZTIMES.GUI.editInnerText('iInfo3',"No message.");
    }
  },
  selfCurrent: async function(){
    const account = ZTIMES.ACCOUNTS.SELF.GetSelected();
    const name = account.name;
    const xAddress = account.xAddress;
    ZTIMES.GUI.editValueText('iSelfName3',name);
    ZTIMES.GUI.editValueText('iSelfAddr3',xAddress);
  },
  selfPrevious: function(){
    ZTIMES.ACCOUNTS.SELF.GetPrevious();
    this.selfCurrent();
  },
  selfNext: function(){
    ZTIMES.ACCOUNTS.SELF.GetNext();
    this.selfCurrent();
  },
  peerCurrent: async function(){
    const account = ZTIMES.ACCOUNTS.PEER.GetSelected();
    const name = account.name;
    const xAddress = account.xAddress;
    ZTIMES.GUI.editValueText('iPeerName3',name);
    ZTIMES.GUI.editValueText('iPeerAddr3',xAddress);
  },
  peerPrevious: function(){
    ZTIMES.ACCOUNTS.PEER.GetPrevious();
    this.peerCurrent();
  },
  peerNext: function(){
    ZTIMES.ACCOUNTS.PEER.GetNext();
    this.peerCurrent();
  },
};

ZTIMES.CONTRACT_LIB = {
  passPhrase: "secret passPhrase",
  Encrypt: function(rawText){
    const encryptedText = CryptoJS.AES.encrypt(rawText,this.passPhrase).toString();
    return encryptedText;
  },
  Decrypt: function(encryptedText){
    const rawText = CryptoJS.AES.decrypt(encryptedText,this.passPhrase).toString(CryptoJS.enc.Utf8);
    return rawText;
  },
};

ZTIMES.CONTRACT_BODY = {
  gas: 4712388,
  gasPrice: 100000000000,
  init: function(){
    console.log("ZTIMES.CONTRACT_BODY.init()");
  },
  test: async function(){
    console.log("ZTIMES.CONTRACT_BODY.test()");
  },
  GetDeployer: async function(){
    const xDeployer = await ZTIMES.BLOCKCHAIN.ContractCall('GetDeployer');
    return xDeployer;
  },
  SetText: async function(xTo,rawText){
    const encryptedText = ZTIMES.CONTRACT_LIB.Encrypt(rawText);
    const xAddressSelf = this.getAddressSelf();
    await ZTIMES.BLOCKCHAIN.ContractSend('SetText',xTo,encryptedText,{from:xAddressSelf,value:240,gas:this.gas,gasPrice:this.gasPrice});
    const info = "SetText" + "\nself : " + xAddressSelf + "\npeer : " + xTo + "\n";
    return {info:info};
  },
  GetMessgeNum: async function(){
    const xAddressSelf = this.getAddressSelf();
    const messageLen = await ZTIMES.BLOCKCHAIN.ContractCall('GetMessageNum',xAddressSelf);
    return messageLen;
  },
  GetText: async function(messsageIndex){
    const xAddressSelf = this.getAddressSelf();
    const result = await ZTIMES.BLOCKCHAIN.ContractCall('GetText',xAddressSelf,messsageIndex);
    const xFrom = result.xFrom;
    const encryptedText = result.text;
    const rawText = ZTIMES.CONTRACT_LIB.Decrypt(encryptedText);
    const info = "GetText" + "\nself : " + xAddressSelf + "\nfrom : " + xFrom + "\n";
    return {xFrom:xFrom, rawText:rawText, info:info};
  },
  Withdraw: async function(messsageIndex){
    const xAddressSelf = this.getAddressSelf();
    await ZTIMES.BLOCKCHAIN.ContractSend('Withdraw',messsageIndex,{from:xAddressSelf,gas:this.gas,gasPrice:this.gasPrice});
    const info = "Withdraw" + "\nself : " + xAddressSelf + "\n";
    return {info:info};
  },
  getAddressSelf: function(){
    const account = ZTIMES.ACCOUNTS.SELF.GetSelected();
    const xAddressSelf = account.xAddress;
    return xAddressSelf;
  },
}

ZTIMES.RUN = {
  init: function(){
    ZTIMES.ACCOUNTS.init();
    ZTIMES.BLOCKCHAIN.init();
    ZTIMES.GUI.init();
    ZTIMES.CONTRACT_BODY.init();
  },
  test: async function(){
    ZTIMES.ACCOUNTS.test();
    ZTIMES.BLOCKCHAIN.test();
    ZTIMES.GUI.test();
    ZTIMES.CONTRACT_BODY.test();
  },
};
window.addEventListener('load',async function(){
  ZTIMES.RUN.init();
  ZTIMES.RUN.test();
});

// ethereum.on('accountsChanged',function(accounts){
//   console.log("changed : " + accounts);
// });
