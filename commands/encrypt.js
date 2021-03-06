module.exports = {
  name: "encrypt",
  description: "This allows you to encrypt messages\n^encrypt <text: *required*>",
  execute(msg, args, client) {
    const randNum = require('./Utilities/randNum.js');
    
    //let allPos = "abcdefghijklmnopqrstuvwxyz 1234567890.,"
    let text = "";
    for (let i=0; i<args.length; i++) {
      text = text + args[i] + " ";
    }
    console.log(`Running encrypt: ${text}`)

    msg.channel.startTyping();
    setTimeout(() => {
      if (!args.length) {
        msg.channel.send("I can't encrypt nothing silly :P");
      } else {
        let newText = "";
        let x;
        let y;
        for (let i = 0; i < text.length; i++) {
          x = text[randNum(0, text.length-1)]
          y = text[randNum(0, text.length-1)]
          newText = newText + x + y + text[i];
        }

        if (newText.length > 2000) {
          msg.channel.send(`${msg.author} your message is over 2000 characters :/`)
        } else {
          msg.channel.send(`${msg.author} says: ` + newText)
        }
        
      }
      if (msg.channel.type != "dm") {
        try {
          msg.delete()
        } catch (e) {
          console.log("Not allowed to delete message...")
        }
      }
      msg.channel.stopTyping(true);
    }, 3000);
  }
}