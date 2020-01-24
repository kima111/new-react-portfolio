const express = require("express");


const app = express();
const PORT = process.env.PORT || 3001;

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {

//     app.use(express.static("build"));
 
 
//     app.get("*", (req, res) => {
//          res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//      });
 
//    }
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.post('/api/form', (req, res)=>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'kima111.profilewebsite@gmail.com',
                pass: '4u2nv!$!$'


            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'kima111@gmail.com',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))     
        }) 
    }) 
})



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});