pragma solidity >= 0.5.0;

contract Node {
  address private s_xDeployer;
  struct Message {
    address xFrom;
    string text;
    uint timeStamp;
    uint deposit;
  }
  mapping(address => Message[]) private s_messages;
  constructor() public {
    s_xDeployer = msg.sender;
  }
  function destructor() public {
    require(msg.sender != address(0));
    require(msg.sender == s_xDeployer);
    selfdestruct(msg.sender);
  }
  function GetDeployer() public view returns(address xDeployer){
    return s_xDeployer;
  }
  function SetText(address xTo, string memory text) public payable {
    require(msg.sender != address(0));
    require(msg.value > 0);
    require(xTo != address(0));
    s_messages[xTo].push(Message({
      xFrom: msg.sender,
      text: text,
      timeStamp: now,
      deposit: msg.value
    }));
  }
  function GetMessageNum(address xSelf) public view returns(uint messageLen) {
    require(xSelf != address(0));
    messageLen = s_messages[xSelf].length;
  }
  function GetText(address xSelf,uint messsageIndex) public view returns(
    uint messageLen,
    address xFrom,
    string memory text,
    uint timeStamp,
    uint deposit
  ) {
    require(xSelf != address(0));
    require(messsageIndex < s_messages[xSelf].length);
    messageLen = s_messages[xSelf].length;
    xFrom = s_messages[xSelf][messsageIndex].xFrom;
    text = s_messages[xSelf][messsageIndex].text;
    timeStamp = s_messages[xSelf][messsageIndex].timeStamp;
    deposit = s_messages[xSelf][messsageIndex].deposit;
  }
  function Withdraw(uint messsageIndex) public payable {
    require(msg.sender != address(0));
    require(messsageIndex < s_messages[msg.sender].length);
    uint deposit = s_messages[msg.sender][messsageIndex].deposit;
    if(deposit > 0){
      s_messages[msg.sender][messsageIndex].deposit = 0;
      msg.sender.transfer(deposit);
    }
  }
}
