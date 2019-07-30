# securityKey
This is a node js version for generate a security key which matches the following rules:

* the max length is 32, can specify min length and max length
* the key's initial characters are from a random substring of a guid
* the random (1-5) bits of the key will be replaced by random special characters from "!@#$%^&*()_+{}|~`';:-=[]/?"
