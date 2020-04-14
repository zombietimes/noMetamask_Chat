const AbiJson = {
  "contractName": "Node",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destructor",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetDeployer",
      "outputs": [
        {
          "name": "xDeployer",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "xTo",
          "type": "address"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "name": "SetText",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "xSelf",
          "type": "address"
        }
      ],
      "name": "GetMessageNum",
      "outputs": [
        {
          "name": "messageLen",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "xSelf",
          "type": "address"
        },
        {
          "name": "messsageIndex",
          "type": "uint256"
        }
      ],
      "name": "GetText",
      "outputs": [
        {
          "name": "messageLen",
          "type": "uint256"
        },
        {
          "name": "xFrom",
          "type": "address"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "timeStamp",
          "type": "uint256"
        },
        {
          "name": "deposit",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "messsageIndex",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"GetDeployer\",\"outputs\":[{\"name\":\"xDeployer\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"xSelf\",\"type\":\"address\"}],\"name\":\"GetMessageNum\",\"outputs\":[{\"name\":\"messageLen\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"xSelf\",\"type\":\"address\"},{\"name\":\"messsageIndex\",\"type\":\"uint256\"}],\"name\":\"GetText\",\"outputs\":[{\"name\":\"messageLen\",\"type\":\"uint256\"},{\"name\":\"xFrom\",\"type\":\"address\"},{\"name\":\"text\",\"type\":\"string\"},{\"name\":\"timeStamp\",\"type\":\"uint256\"},{\"name\":\"deposit\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"destructor\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"messsageIndex\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"xTo\",\"type\":\"address\"},{\"name\":\"text\",\"type\":\"string\"}],\"name\":\"SetText\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/zombie/dapps/deploy/by_truffle/contracts/Node.sol\":\"Node\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/zombie/dapps/deploy/by_truffle/contracts/Node.sol\":{\"keccak256\":\"0x4b184d866c227e504c7c85c0f8657062d62342cea0a2cca4bf01023c87532469\",\"urls\":[\"bzzr://8f542f493c882b24c11e41a549ee8f3208bc3227e6a81c3418e2455795628792\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a03191633179055610757806100326000396000f3fe6080604052600436106100775763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663293c4d09811461007c578063349acf81146100ad57806339c832ad146100f25780634476d23b146101d15780635b6b431d146101e8578063ebb4de9814610205575b600080fd5b34801561008857600080fd5b506100916102bb565b60408051600160a060020a039092168252519081900360200190f35b3480156100b957600080fd5b506100e0600480360360208110156100d057600080fd5b5035600160a060020a03166102cb565b60408051918252519081900360200190f35b3480156100fe57600080fd5b5061012b6004803603604081101561011557600080fd5b50600160a060020a0381351690602001356102fe565b6040518086815260200185600160a060020a0316600160a060020a0316815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561019257818101518382015260200161017a565b50505050905090810190601f1680156101bf5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156101dd57600080fd5b506101e66104d6565b005b6101e6600480360360208110156101fe57600080fd5b50356104fc565b6101e66004803603604081101561021b57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561024657600080fd5b82018360208201111561025857600080fd5b8035906020019184600183028401116401000000008311171561027a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105bd945050505050565b600054600160a060020a03165b90565b6000600160a060020a03821615156102e257600080fd5b50600160a060020a031660009081526001602052604090205490565b60008060608180600160a060020a038716151561031a57600080fd5b600160a060020a038716600090815260016020526040902054861061033e57600080fd5b600160a060020a0387166000908152600160205260409020805495508686811061036457fe5b60009182526020808320600490920290910154600160a060020a038a81168452600190925260409092208054919092169550879081106103a057fe5b90600052602060002090600402016001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b50505050600160a060020a0389166000908152600160205260409020805492955091889150811061047257fe5b90600052602060002090600402016002015491506001600088600160a060020a0316600160a060020a03168152602001908152602001600020868154811015156104b857fe5b90600052602060002090600402016003015490509295509295909350565b3315156104e257600080fd5b600054600160a060020a031633146104f957600080fd5b33ff5b33151561050857600080fd5b33600090815260016020526040902054811061052357600080fd5b33600090815260016020526040812080548390811061053e57fe5b906000526020600020906004020160030154905060008111156105b95733600090815260016020526040812080548490811061057657fe5b60009182526020822060036004909202010191909155604051339183156108fc02918491818181858888f193505050501580156105b7573d6000803e3d6000fd5b505b5050565b3315156105c957600080fd5b600034116105d657600080fd5b600160a060020a03821615156105eb57600080fd5b600160a060020a038281166000908152600160208181526040808420815160808101835233815280840188815242938201939093523460608201528154808601808455928752958490208151600490970201805473ffffffffffffffffffffffffffffffffffffffff191696909716959095178655905180519195936106779390850192910190610693565b5060408201518160020155606082015181600301555050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106d457805160ff1916838001178555610701565b82800160010185558215610701579182015b828111156107015782518255916020019190600101906106e6565b5061070d929150610711565b5090565b6102c891905b8082111561070d576000815560010161071756fea165627a7a72305820e21617ab7244919892832e3a03d8e7564a2f16c2941b94b1476737908ee380040029",
  "deployedBytecode": "0x6080604052600436106100775763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663293c4d09811461007c578063349acf81146100ad57806339c832ad146100f25780634476d23b146101d15780635b6b431d146101e8578063ebb4de9814610205575b600080fd5b34801561008857600080fd5b506100916102bb565b60408051600160a060020a039092168252519081900360200190f35b3480156100b957600080fd5b506100e0600480360360208110156100d057600080fd5b5035600160a060020a03166102cb565b60408051918252519081900360200190f35b3480156100fe57600080fd5b5061012b6004803603604081101561011557600080fd5b50600160a060020a0381351690602001356102fe565b6040518086815260200185600160a060020a0316600160a060020a0316815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561019257818101518382015260200161017a565b50505050905090810190601f1680156101bf5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156101dd57600080fd5b506101e66104d6565b005b6101e6600480360360208110156101fe57600080fd5b50356104fc565b6101e66004803603604081101561021b57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561024657600080fd5b82018360208201111561025857600080fd5b8035906020019184600183028401116401000000008311171561027a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105bd945050505050565b600054600160a060020a03165b90565b6000600160a060020a03821615156102e257600080fd5b50600160a060020a031660009081526001602052604090205490565b60008060608180600160a060020a038716151561031a57600080fd5b600160a060020a038716600090815260016020526040902054861061033e57600080fd5b600160a060020a0387166000908152600160205260409020805495508686811061036457fe5b60009182526020808320600490920290910154600160a060020a038a81168452600190925260409092208054919092169550879081106103a057fe5b90600052602060002090600402016001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b50505050600160a060020a0389166000908152600160205260409020805492955091889150811061047257fe5b90600052602060002090600402016002015491506001600088600160a060020a0316600160a060020a03168152602001908152602001600020868154811015156104b857fe5b90600052602060002090600402016003015490509295509295909350565b3315156104e257600080fd5b600054600160a060020a031633146104f957600080fd5b33ff5b33151561050857600080fd5b33600090815260016020526040902054811061052357600080fd5b33600090815260016020526040812080548390811061053e57fe5b906000526020600020906004020160030154905060008111156105b95733600090815260016020526040812080548490811061057657fe5b60009182526020822060036004909202010191909155604051339183156108fc02918491818181858888f193505050501580156105b7573d6000803e3d6000fd5b505b5050565b3315156105c957600080fd5b600034116105d657600080fd5b600160a060020a03821615156105eb57600080fd5b600160a060020a038281166000908152600160208181526040808420815160808101835233815280840188815242938201939093523460608201528154808601808455928752958490208151600490970201805473ffffffffffffffffffffffffffffffffffffffff191696909716959095178655905180519195936106779390850192910190610693565b5060408201518160020155606082015181600301555050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106d457805160ff1916838001178555610701565b82800160010185558215610701579182015b828111156107015782518255916020019190600101906106e6565b5061070d929150610711565b5090565b6102c891905b8082111561070d576000815560010161071756fea165627a7a72305820e21617ab7244919892832e3a03d8e7564a2f16c2941b94b1476737908ee380040029",
  "sourceMap": "27:1842:1:-;;;225:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;252:11:1;:24;;-1:-1:-1;;;;;;252:24:1;266:10;252:24;;;27:1842;;;;;;",
  "deployedSourceMap": "27:1842:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;430:90:1;;;;;;;;-1:-1:-1;;;;;430:90:1;;;;;;;;;;;;;;829:157;;8:9:-1;5:2;;;30:1;27;20:12;5:2;829:157:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;829:157:1;-1:-1:-1;;;;;829:157:1;;;;;;;;;;;;;;;;;;;989:532;;8:9:-1;5:2;;;30:1;27;20:12;5:2;989:532:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;989:532:1;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;989:532:1;-1:-1:-1;;;;;989:532:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;989:532:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;284:143;;8:9:-1;5:2;;;30:1;27;20:12;5:2;284:143:1;;;;;;1524:343;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1524:343:1;;;523:303;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;523:303:1;;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;523:303:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;523:303:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;523:303:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;523:303:1;;-1:-1:-1;523:303:1;;-1:-1:-1;;;;;523:303:1;430:90;473:17;504:11;-1:-1:-1;;;;;504:11:1;430:90;;:::o;829:157::-;887:15;-1:-1:-1;;;;;918:19:1;;;;910:28;;;;;;-1:-1:-1;;;;;;957:17:1;;;;;:10;:17;;;;;:24;;829:157::o;989:532::-;1065:15;;1105:18;1065:15;;-1:-1:-1;;;;;1180:19:1;;;;1172:28;;;;;;-1:-1:-1;;;;;1230:17:1;;;;;;:10;:17;;;;;:24;1214:40;;1206:49;;;;;;-1:-1:-1;;;;;1274:17:1;;;;;;:10;:17;;;;;:24;;;-1:-1:-1;1330:13:1;1312:32;;;;;;;;;;;;;;;;;;;;;;:38;-1:-1:-1;;;;;1363:17:1;;;;;1312:38;1363:17;;;;;;;:32;;1312:38;;;;;-1:-1:-1;1381:13:1;;1363:32;;;;;;;;;;;;;;;;:37;;1356:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;1418:17:1;;;;;;:10;:17;;;;;:32;;1356:44;;-1:-1:-1;1418:17:1;1436:13;;-1:-1:-1;1418:32:1;;;;;;;;;;;;;;;;:42;;;1406:54;;1476:10;:17;1487:5;-1:-1:-1;;;;;1476:17:1;-1:-1:-1;;;;;1476:17:1;;;;;;;;;;;;1494:13;1476:32;;;;;;;;;;;;;;;;;;;;:40;;;1466:50;;989:532;;;;;;;;:::o;284:143::-;327:10;:24;;319:33;;;;;;380:11;;-1:-1:-1;;;;;380:11:1;366:10;:25;358:34;;;;;;411:10;398:24;1524:343;1591:10;:24;;1583:33;;;;;;1657:10;1646:22;;;;:10;:22;;;;;:29;1630:45;;1622:54;;;;;;1708:10;1682:12;1697:22;;;:10;:22;;;;;:37;;1720:13;;1697:37;;;;;;;;;;;;;;;;:45;;;1682:60;;1761:1;1751:7;:11;1748:115;;;1782:10;1819:1;1771:22;;;:10;:22;;;;;:37;;1794:13;;1771:37;;;;;;;;;;;;;:45;:37;;;;;:45;:49;;;;1828:28;;:10;;:28;;;;;1848:7;;1828:28;1771:37;1828:28;1848:7;1828:10;:28;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1828:28:1;1748:115;1524:343;;:::o;523:303::-;602:10;:24;;594:33;;;;;;653:1;641:9;:13;633:22;;;;;;-1:-1:-1;;;;;669:17:1;;;;661:26;;;;;;-1:-1:-1;;;;;693:15:1;;;;;;;:10;:15;;;;;;;;714:106;;;;;;;737:10;714:106;;;;;;;;784:3;714:106;;;;;;;804:9;714:106;;;;27:10:-1;;23:18;;;45:23;;;693:128:1;;;;;;;;;;;;;;;;-1:-1:-1;;693:128:1;;;;;;;;;;;;;;;23:18:-1;;693:128:1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;523:303;;:::o;27:1842::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;27:1842:1;;;-1:-1:-1;27:1842:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity >= 0.5.0;\n\ncontract Node {\n  address private s_xDeployer;\n  struct Message {\n    address xFrom;\n    string text;\n    uint timeStamp;\n    uint deposit;\n  }\n  mapping(address => Message[]) private s_messages;\n  constructor() public {\n    s_xDeployer = msg.sender;\n  }\n  function destructor() public {\n    require(msg.sender != address(0));\n    require(msg.sender == s_xDeployer);\n    selfdestruct(msg.sender);\n  }\n  function GetDeployer() public view returns(address xDeployer){\n    return s_xDeployer;\n  }\n  function SetText(address xTo, string memory text) public payable {\n    require(msg.sender != address(0));\n    require(msg.value > 0);\n    require(xTo != address(0));\n    s_messages[xTo].push(Message({\n      xFrom: msg.sender,\n      text: text,\n      timeStamp: now,\n      deposit: msg.value\n    }));\n  }\n  function GetMessageNum(address xSelf) public view returns(uint messageLen) {\n    require(xSelf != address(0));\n    messageLen = s_messages[xSelf].length;\n  }\n  function GetText(address xSelf,uint messsageIndex) public view returns(\n    uint messageLen,\n    address xFrom,\n    string memory text,\n    uint timeStamp,\n    uint deposit\n  ) {\n    require(xSelf != address(0));\n    require(messsageIndex < s_messages[xSelf].length);\n    messageLen = s_messages[xSelf].length;\n    xFrom = s_messages[xSelf][messsageIndex].xFrom;\n    text = s_messages[xSelf][messsageIndex].text;\n    timeStamp = s_messages[xSelf][messsageIndex].timeStamp;\n    deposit = s_messages[xSelf][messsageIndex].deposit;\n  }\n  function Withdraw(uint messsageIndex) public payable {\n    require(msg.sender != address(0));\n    require(messsageIndex < s_messages[msg.sender].length);\n    uint deposit = s_messages[msg.sender][messsageIndex].deposit;\n    if(deposit > 0){\n      s_messages[msg.sender][messsageIndex].deposit = 0;\n      msg.sender.transfer(deposit);\n    }\n  }\n}\n\n",
  "sourcePath": "/home/zombie/dapps/deploy/by_truffle/contracts/Node.sol",
  "ast": {
    "absolutePath": "/home/zombie/dapps/deploy/by_truffle/contracts/Node.sol",
    "exportedSymbols": {
      "Node": [
        322
      ]
    },
    "id": 323,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:25:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 322,
        "linearizedBaseContracts": [
          322
        ],
        "name": "Node",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "s_xDeployer",
            "nodeType": "VariableDeclaration",
            "scope": 322,
            "src": "45:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 59,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "45:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "canonicalName": "Node.Message",
            "id": 69,
            "members": [
              {
                "constant": false,
                "id": 62,
                "name": "xFrom",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "97:13:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "97:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "text",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "116:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 63,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "116:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 66,
                "name": "timeStamp",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "133:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 65,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "133:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 68,
                "name": "deposit",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "153:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 67,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "153:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Message",
            "nodeType": "StructDefinition",
            "scope": 322,
            "src": "76:94:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 74,
            "name": "s_messages",
            "nodeType": "VariableDeclaration",
            "scope": 322,
            "src": "173:48:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
              "typeString": "mapping(address => struct Node.Message[])"
            },
            "typeName": {
              "id": 73,
              "keyType": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "181:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "173:29:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct Node.Message[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 71,
                  "name": "Message",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 69,
                  "src": "192:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Message_$69_storage_ptr",
                    "typeString": "struct Node.Message"
                  }
                },
                "id": 72,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "192:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage_ptr",
                  "typeString": "struct Node.Message[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 82,
              "nodeType": "Block",
              "src": "246:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 77,
                      "name": "s_xDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "252:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 337,
                        "src": "266:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "266:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "252:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "252:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 83,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "236:2:1"
            },
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:1"
            },
            "scope": 322,
            "src": "225:56:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 107,
              "nodeType": "Block",
              "src": "313:114:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 92,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "327:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "327:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 90,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "349:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 89,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "341:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 91,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "341:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "327:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 86,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "319:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "319:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "366:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "366:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "s_xDeployer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "380:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "366:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "358:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "358:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "358:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 337,
                          "src": "411:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "411:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 102,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 345,
                      "src": "398:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "398:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 106,
                  "nodeType": "ExpressionStatement",
                  "src": "398:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 108,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "destructor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "303:2:1"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:0:1"
            },
            "scope": 322,
            "src": "284:143:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 115,
              "nodeType": "Block",
              "src": "491:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 113,
                    "name": "s_xDeployer",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "504:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 112,
                  "id": 114,
                  "nodeType": "Return",
                  "src": "497:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 116,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetDeployer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:2:1"
            },
            "returnParameters": {
              "id": 112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 111,
                  "name": "xDeployer",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "473:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 110,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:19:1"
            },
            "scope": 322,
            "src": "430:90:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "588:238:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "602:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 125,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "602:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 127,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "624:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "616:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "616:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "602:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 123,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "594:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "594:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "594:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "641:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "641:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "653:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "641:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "633:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "633:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 138,
                  "nodeType": "ExpressionStatement",
                  "src": "633:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 140,
                          "name": "xTo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "669:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "684:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "676:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "676:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "669:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 139,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "661:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "661:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146,
                  "nodeType": "ExpressionStatement",
                  "src": "661:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 152,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 337,
                              "src": "737:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 153,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "737:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 154,
                            "name": "text",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "761:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "784:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 156,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 337,
                              "src": "804:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "804:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 151,
                          "name": "Message",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "714:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Message_$69_storage_ptr_$",
                            "typeString": "type(struct Node.Message storage pointer)"
                          }
                        },
                        "id": 158,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "xFrom",
                          "text",
                          "timeStamp",
                          "deposit"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "714:106:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_memory",
                          "typeString": "struct Node.Message memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Message_$69_memory",
                          "typeString": "struct Node.Message memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 147,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "693:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 149,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "xTo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "704:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "693:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "693:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Message_$69_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct Node.Message storage ref) returns (uint256)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "693:128:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "693:128:1"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "SetText",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "name": "xTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "540:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "540:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120,
                  "name": "text",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "553:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "553:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "539:33:1"
            },
            "returnParameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "588:0:1"
            },
            "scope": 322,
            "src": "523:303:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 184,
              "nodeType": "Block",
              "src": "904:82:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 170,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "918:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "935:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "927:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "927:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "918:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "910:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "910:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 176,
                  "nodeType": "ExpressionStatement",
                  "src": "910:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 177,
                      "name": "messageLen",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 167,
                      "src": "944:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 178,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "957:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 180,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "968:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "957:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 181,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "957:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "944:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 183,
                  "nodeType": "ExpressionStatement",
                  "src": "944:37:1"
                }
              ]
            },
            "documentation": null,
            "id": 185,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetMessageNum",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "xSelf",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "852:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "851:15:1"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 167,
                  "name": "messageLen",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "887:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "887:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "886:17:1"
            },
            "scope": 322,
            "src": "829:157:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 262,
              "nodeType": "Block",
              "src": "1166:355:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 203,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 187,
                          "src": "1180:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1197:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1189:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1189:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1180:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 202,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1172:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1172:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 209,
                  "nodeType": "ExpressionStatement",
                  "src": "1172:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 211,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1214:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 212,
                              "name": "s_messages",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1230:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                              }
                            },
                            "id": 214,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 213,
                              "name": "xSelf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 187,
                              "src": "1241:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1230:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                              "typeString": "struct Node.Message storage ref[] storage ref"
                            }
                          },
                          "id": 215,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1230:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1214:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 210,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1206:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1206:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 218,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 219,
                      "name": "messageLen",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 192,
                      "src": "1261:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1274:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 222,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 221,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 187,
                          "src": "1285:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1274:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 223,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1274:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1261:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 225,
                  "nodeType": "ExpressionStatement",
                  "src": "1261:37:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 226,
                      "name": "xFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "1304:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 227,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1312:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 229,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 228,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1323:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1312:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 231,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 230,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1330:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1312:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 232,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "xFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62,
                      "src": "1312:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1304:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 234,
                  "nodeType": "ExpressionStatement",
                  "src": "1304:46:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 235,
                      "name": "text",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 196,
                      "src": "1356:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 236,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1363:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 238,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 237,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1374:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1363:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 240,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 239,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1381:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1363:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "text",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64,
                      "src": "1363:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "src": "1356:44:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 243,
                  "nodeType": "ExpressionStatement",
                  "src": "1356:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 244,
                      "name": "timeStamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1406:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 245,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1418:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 247,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 246,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1429:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1418:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 248,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1436:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1418:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 250,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timeStamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 66,
                      "src": "1418:42:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1406:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 252,
                  "nodeType": "ExpressionStatement",
                  "src": "1406:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 253,
                      "name": "deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "1466:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1476:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 256,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 255,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1487:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1476:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 258,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1494:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1476:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 259,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deposit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68,
                      "src": "1476:40:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1466:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 261,
                  "nodeType": "ExpressionStatement",
                  "src": "1466:50:1"
                }
              ]
            },
            "documentation": null,
            "id": 263,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetText",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 187,
                  "name": "xSelf",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1006:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 189,
                  "name": "messsageIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1020:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 188,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1005:34:1"
            },
            "returnParameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "messageLen",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1065:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 194,
                  "name": "xFrom",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1086:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 193,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 196,
                  "name": "text",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1105:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1105:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 198,
                  "name": "timeStamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1129:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 200,
                  "name": "deposit",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1149:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1149:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1059:106:1"
            },
            "scope": 322,
            "src": "989:532:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 320,
              "nodeType": "Block",
              "src": "1577:290:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 269,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1591:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1591:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1613:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 271,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1605:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1605:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1591:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 268,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1583:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1583:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 276,
                  "nodeType": "ExpressionStatement",
                  "src": "1583:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 278,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1630:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 279,
                              "name": "s_messages",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1646:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 280,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 337,
                                "src": "1657:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1657:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1646:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                              "typeString": "struct Node.Message storage ref[] storage ref"
                            }
                          },
                          "id": 283,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1646:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1630:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 277,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1622:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1622:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "1622:54:1"
                },
                {
                  "assignments": [
                    288
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 288,
                      "name": "deposit",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1682:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 287,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1682:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 296,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1697:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 292,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 290,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1708:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1708:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1697:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 294,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 293,
                        "name": "messsageIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "1720:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1697:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Message_$69_storage",
                        "typeString": "struct Node.Message storage ref"
                      }
                    },
                    "id": 295,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "deposit",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 68,
                    "src": "1697:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1682:60:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 297,
                      "name": "deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 288,
                      "src": "1751:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1761:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1751:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 319,
                  "nodeType": "IfStatement",
                  "src": "1748:115:1",
                  "trueBody": {
                    "id": 318,
                    "nodeType": "Block",
                    "src": "1763:100:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 300,
                                  "name": "s_messages",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "1771:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                    "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                                  }
                                },
                                "id": 304,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 301,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 337,
                                    "src": "1782:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1782:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1771:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                                  "typeString": "struct Node.Message storage ref[] storage ref"
                                }
                              },
                              "id": 305,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 303,
                                "name": "messsageIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 265,
                                "src": "1794:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1771:37:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Message_$69_storage",
                                "typeString": "struct Node.Message storage ref"
                              }
                            },
                            "id": 306,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "deposit",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 68,
                            "src": "1771:45:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1819:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1771:49:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 309,
                        "nodeType": "ExpressionStatement",
                        "src": "1771:49:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 315,
                              "name": "deposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 288,
                              "src": "1848:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 310,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 337,
                                "src": "1828:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1828:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1828:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1828:28:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 317,
                        "nodeType": "ExpressionStatement",
                        "src": "1828:28:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 321,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "name": "messsageIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 321,
                  "src": "1542:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:20:1"
            },
            "returnParameters": {
              "id": 267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1577:0:1"
            },
            "scope": 322,
            "src": "1524:343:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 323,
        "src": "27:1842:1"
      }
    ],
    "src": "0:1871:1"
  },
  "legacyAST": {
    "absolutePath": "/home/zombie/dapps/deploy/by_truffle/contracts/Node.sol",
    "exportedSymbols": {
      "Node": [
        322
      ]
    },
    "id": 323,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:25:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 322,
        "linearizedBaseContracts": [
          322
        ],
        "name": "Node",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "s_xDeployer",
            "nodeType": "VariableDeclaration",
            "scope": 322,
            "src": "45:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 59,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "45:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "canonicalName": "Node.Message",
            "id": 69,
            "members": [
              {
                "constant": false,
                "id": 62,
                "name": "xFrom",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "97:13:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "97:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "text",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "116:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 63,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "116:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 66,
                "name": "timeStamp",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "133:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 65,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "133:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 68,
                "name": "deposit",
                "nodeType": "VariableDeclaration",
                "scope": 69,
                "src": "153:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 67,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "153:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Message",
            "nodeType": "StructDefinition",
            "scope": 322,
            "src": "76:94:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 74,
            "name": "s_messages",
            "nodeType": "VariableDeclaration",
            "scope": 322,
            "src": "173:48:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
              "typeString": "mapping(address => struct Node.Message[])"
            },
            "typeName": {
              "id": 73,
              "keyType": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "181:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "173:29:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct Node.Message[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 71,
                  "name": "Message",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 69,
                  "src": "192:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Message_$69_storage_ptr",
                    "typeString": "struct Node.Message"
                  }
                },
                "id": 72,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "192:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage_ptr",
                  "typeString": "struct Node.Message[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 82,
              "nodeType": "Block",
              "src": "246:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 77,
                      "name": "s_xDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "252:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 337,
                        "src": "266:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "266:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "252:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "252:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 83,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "236:2:1"
            },
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:1"
            },
            "scope": 322,
            "src": "225:56:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 107,
              "nodeType": "Block",
              "src": "313:114:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 92,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "327:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "327:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 90,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "349:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 89,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "341:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 91,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "341:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "327:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 86,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "319:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "319:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "366:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "366:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "s_xDeployer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "380:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "366:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "358:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "358:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "358:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 337,
                          "src": "411:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "411:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 102,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 345,
                      "src": "398:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "398:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 106,
                  "nodeType": "ExpressionStatement",
                  "src": "398:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 108,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "destructor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "303:2:1"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:0:1"
            },
            "scope": 322,
            "src": "284:143:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 115,
              "nodeType": "Block",
              "src": "491:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 113,
                    "name": "s_xDeployer",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "504:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 112,
                  "id": 114,
                  "nodeType": "Return",
                  "src": "497:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 116,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetDeployer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:2:1"
            },
            "returnParameters": {
              "id": 112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 111,
                  "name": "xDeployer",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "473:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 110,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:19:1"
            },
            "scope": 322,
            "src": "430:90:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "588:238:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "602:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 125,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "602:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 127,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "624:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "616:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "616:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "602:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 123,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "594:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "594:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "594:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "641:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "641:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "653:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "641:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "633:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "633:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 138,
                  "nodeType": "ExpressionStatement",
                  "src": "633:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 140,
                          "name": "xTo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "669:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "684:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "676:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "676:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "669:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 139,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "661:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "661:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146,
                  "nodeType": "ExpressionStatement",
                  "src": "661:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 152,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 337,
                              "src": "737:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 153,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "737:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 154,
                            "name": "text",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "761:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "784:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 156,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 337,
                              "src": "804:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "804:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 151,
                          "name": "Message",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "714:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Message_$69_storage_ptr_$",
                            "typeString": "type(struct Node.Message storage pointer)"
                          }
                        },
                        "id": 158,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "xFrom",
                          "text",
                          "timeStamp",
                          "deposit"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "714:106:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_memory",
                          "typeString": "struct Node.Message memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Message_$69_memory",
                          "typeString": "struct Node.Message memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 147,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "693:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 149,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "xTo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "704:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "693:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "693:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Message_$69_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct Node.Message storage ref) returns (uint256)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "693:128:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "693:128:1"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "SetText",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "name": "xTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "540:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "540:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120,
                  "name": "text",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "553:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "553:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "539:33:1"
            },
            "returnParameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "588:0:1"
            },
            "scope": 322,
            "src": "523:303:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 184,
              "nodeType": "Block",
              "src": "904:82:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 170,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "918:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "935:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "927:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "927:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "918:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "910:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "910:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 176,
                  "nodeType": "ExpressionStatement",
                  "src": "910:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 177,
                      "name": "messageLen",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 167,
                      "src": "944:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 178,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "957:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 180,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "968:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "957:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 181,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "957:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "944:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 183,
                  "nodeType": "ExpressionStatement",
                  "src": "944:37:1"
                }
              ]
            },
            "documentation": null,
            "id": 185,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetMessageNum",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "xSelf",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "852:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "851:15:1"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 167,
                  "name": "messageLen",
                  "nodeType": "VariableDeclaration",
                  "scope": 185,
                  "src": "887:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "887:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "886:17:1"
            },
            "scope": 322,
            "src": "829:157:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 262,
              "nodeType": "Block",
              "src": "1166:355:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 203,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 187,
                          "src": "1180:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1197:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1189:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1189:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1180:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 202,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1172:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1172:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 209,
                  "nodeType": "ExpressionStatement",
                  "src": "1172:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 211,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1214:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 212,
                              "name": "s_messages",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1230:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                              }
                            },
                            "id": 214,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 213,
                              "name": "xSelf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 187,
                              "src": "1241:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1230:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                              "typeString": "struct Node.Message storage ref[] storage ref"
                            }
                          },
                          "id": 215,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1230:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1214:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 210,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1206:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1206:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 218,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 219,
                      "name": "messageLen",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 192,
                      "src": "1261:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1274:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 222,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 221,
                          "name": "xSelf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 187,
                          "src": "1285:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1274:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 223,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1274:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1261:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 225,
                  "nodeType": "ExpressionStatement",
                  "src": "1261:37:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 226,
                      "name": "xFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "1304:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 227,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1312:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 229,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 228,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1323:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1312:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 231,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 230,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1330:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1312:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 232,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "xFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62,
                      "src": "1312:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1304:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 234,
                  "nodeType": "ExpressionStatement",
                  "src": "1304:46:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 235,
                      "name": "text",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 196,
                      "src": "1356:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 236,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1363:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 238,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 237,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1374:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1363:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 240,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 239,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1381:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1363:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "text",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64,
                      "src": "1363:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "src": "1356:44:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 243,
                  "nodeType": "ExpressionStatement",
                  "src": "1356:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 244,
                      "name": "timeStamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1406:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 245,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1418:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 247,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 246,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1429:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1418:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 248,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1436:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1418:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 250,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timeStamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 66,
                      "src": "1418:42:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1406:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 252,
                  "nodeType": "ExpressionStatement",
                  "src": "1406:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 253,
                      "name": "deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "1466:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "s_messages",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1476:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                              "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                            }
                          },
                          "id": 256,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 255,
                            "name": "xSelf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 187,
                            "src": "1487:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1476:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                            "typeString": "struct Node.Message storage ref[] storage ref"
                          }
                        },
                        "id": 258,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 257,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 189,
                          "src": "1494:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1476:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Message_$69_storage",
                          "typeString": "struct Node.Message storage ref"
                        }
                      },
                      "id": 259,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deposit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68,
                      "src": "1476:40:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1466:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 261,
                  "nodeType": "ExpressionStatement",
                  "src": "1466:50:1"
                }
              ]
            },
            "documentation": null,
            "id": 263,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetText",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 187,
                  "name": "xSelf",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1006:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 189,
                  "name": "messsageIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1020:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 188,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1005:34:1"
            },
            "returnParameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "messageLen",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1065:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 194,
                  "name": "xFrom",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1086:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 193,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 196,
                  "name": "text",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1105:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1105:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 198,
                  "name": "timeStamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1129:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 200,
                  "name": "deposit",
                  "nodeType": "VariableDeclaration",
                  "scope": 263,
                  "src": "1149:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1149:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1059:106:1"
            },
            "scope": 322,
            "src": "989:532:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 320,
              "nodeType": "Block",
              "src": "1577:290:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 269,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1591:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1591:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1613:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 271,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1605:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1605:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1591:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 268,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1583:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1583:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 276,
                  "nodeType": "ExpressionStatement",
                  "src": "1583:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 278,
                          "name": "messsageIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1630:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 279,
                              "name": "s_messages",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1646:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                              }
                            },
                            "id": 282,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 280,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 337,
                                "src": "1657:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1657:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1646:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                              "typeString": "struct Node.Message storage ref[] storage ref"
                            }
                          },
                          "id": 283,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1646:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1630:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 277,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        340,
                        341
                      ],
                      "referencedDeclaration": 340,
                      "src": "1622:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1622:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "1622:54:1"
                },
                {
                  "assignments": [
                    288
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 288,
                      "name": "deposit",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1682:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 287,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1682:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 296,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "s_messages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1697:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                          }
                        },
                        "id": 292,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 290,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1708:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1708:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1697:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                          "typeString": "struct Node.Message storage ref[] storage ref"
                        }
                      },
                      "id": 294,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 293,
                        "name": "messsageIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "1720:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1697:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Message_$69_storage",
                        "typeString": "struct Node.Message storage ref"
                      }
                    },
                    "id": 295,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "deposit",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 68,
                    "src": "1697:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1682:60:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 297,
                      "name": "deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 288,
                      "src": "1751:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1761:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1751:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 319,
                  "nodeType": "IfStatement",
                  "src": "1748:115:1",
                  "trueBody": {
                    "id": 318,
                    "nodeType": "Block",
                    "src": "1763:100:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 300,
                                  "name": "s_messages",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "1771:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Message_$69_storage_$dyn_storage_$",
                                    "typeString": "mapping(address => struct Node.Message storage ref[] storage ref)"
                                  }
                                },
                                "id": 304,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 301,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 337,
                                    "src": "1782:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1782:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1771:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Message_$69_storage_$dyn_storage",
                                  "typeString": "struct Node.Message storage ref[] storage ref"
                                }
                              },
                              "id": 305,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 303,
                                "name": "messsageIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 265,
                                "src": "1794:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1771:37:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Message_$69_storage",
                                "typeString": "struct Node.Message storage ref"
                              }
                            },
                            "id": 306,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "deposit",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 68,
                            "src": "1771:45:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1819:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1771:49:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 309,
                        "nodeType": "ExpressionStatement",
                        "src": "1771:49:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 315,
                              "name": "deposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 288,
                              "src": "1848:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 310,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 337,
                                "src": "1828:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1828:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1828:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1828:28:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 317,
                        "nodeType": "ExpressionStatement",
                        "src": "1828:28:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 321,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "name": "messsageIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 321,
                  "src": "1542:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:20:1"
            },
            "returnParameters": {
              "id": 267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1577:0:1"
            },
            "scope": 322,
            "src": "1524:343:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 323,
        "src": "27:1842:1"
      }
    ],
    "src": "0:1871:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x150b04271e57B261f51e3197Cac3fB28933662B6",
      "transactionHash": "0x855feefb2bbbd10b80225d43e2e4d5379374d0ed9613dcba72aa723143ada51c"
    }
  },
  "schemaVersion": "3.0.9",
  "updatedAt": "2020-04-12T04:30:22.852Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}