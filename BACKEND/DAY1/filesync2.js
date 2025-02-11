const { myreadFile, mywritefile, username } = require("./FILEsYNC1");

myreadFile();
const data='aur bhyi kya kr k manega';
mywritefile(data);
myreadFile();
console.log("username=",username)