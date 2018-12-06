pragma solidity >=0.4.22 <0.6.0;
contract MedicalCase{
    mapping(address => string) private keys;
    address[] private userAddresses;
    
    function addressExist(address useraddress) private returns (bool){
        for (uint i=0; i<userAddresses.length; i++) {
            if (userAddresses[i] == useraddress){
                return true;
            }
        }
        return false;
    }
    
    function setKey(address useraddress,string memory userkey) public returns (bool){
        if (addressExist(useraddress) == true){
            return false;   
        }
        keys[useraddress] =userkey;
        
        userAddresses.push(useraddress);
        return true;
    }
    
    function getKey(address useraddress) public returns (string memory){
        if (addressExist(useraddress) == true){
            return keys[useraddress];
        }
        return '';  //#Not sure what you want to return if key not exists, you can change as you want
        
    }
}