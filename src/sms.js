// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACf9e3929d3959e09c591429b90c7b3cc7'
const authToken = 'b4414b7abed730fd0cc695f6a1a74b2e'
const client = require('twilio')(accountSid, authToken)

class SMS {
    constructor (text, from='+13158701593', to='+447565878862') {
        this.text = text
        this.from = from
        this.to = to
    }

    sendSMS () {
        client.messages.create({
            body: this.text,
            from: this.from,
            to: this.to
            })
            .then(message => console.log(message.sid))
    }
}

module.exports = SMS