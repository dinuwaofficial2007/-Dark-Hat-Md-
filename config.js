const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/d7M2QQN/IMG-20240809-WA0039-1.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || 
"```🎩Hello I am Alive Now !```

"*_•°•🍒Have a nice day.🍒•°•_*

"`🤖Bot Name` : *_Dark-Hat-Md_*

"`⚙️Version` : *_1.0.0_*

"`👨🏻‍💻Owner` : *_Mr Dinuwa_*
 
"`👾Github` : *_github.com/dinuwaofficial2007_* 

"*_🙂Thanks for using Me.🙂_*

"*© 🎩Dark-Hat-Md 2024🎩*",  
};
