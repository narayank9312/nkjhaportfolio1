const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact',(req,res) => {
    let data = req.body
    console.log("checking-------",data)
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "please fill all  field"})
    }

    let smtpTransporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth:{
            user:"njha24033@gmail.com",
            pass:"nayu@0108"
        }
    })
    let mailOption = {
        from : data.email,
        to :'njha24033@gmail.com' ,
        subject: `message from ${data.name}`,
        html: `
        
        <h3>Information<h3/>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <ul/>

        <h3>Message<h3/>
        <p>${data.message}<p/>
        
        `
    }

    smtpTransporter.sendMail(mailOption , (error) => {
        try {
            if (error) return res.status(400).json({msg: error})
            res.status(200).json({msg:"Thank you for contacting NK. Jha"})


        } catch(error) {
            if (error) return res.status(500).json({msg:"There is server error"})
        }
    })
})

module.exports = router