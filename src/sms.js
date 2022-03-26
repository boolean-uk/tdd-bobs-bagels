class SMS {
  accountSid = "AC8b73a1b42ef734b0ca54621845416321";
  authToken = "f7b0916cee4f8624276860d3c5be55d2";
  client = require("twilio")(this.accountSid, this.authToken);

  constructor(receipt) {
    this.receipt = receipt;
    this.sendMessage();
  }

  sendMessage() {
    console.log(this.receipt);
    this.client.messages
      .create({
        body: `${this.receipt}`,
        from: "+18658008110",
        to: "+447383562611",
      })
      .then((message) => console.log(message.sid));
  }
}

module.exports = SMS;
