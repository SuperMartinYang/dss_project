pragma solidity ^0.4.15;
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
    
    function setKey(address useraddress, string userkey) public {
        if (addressExist(useraddress) != true){
            keys[useraddress] =userkey;
            userAddresses.push(useraddress);
        }
    }
    
    function getKey(address useraddress) public constant returns (string key){
        if (addressExist(useraddress) == true){
            return keys[useraddress];
        }
        return '';
        
    }
}