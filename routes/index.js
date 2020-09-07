const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const nodeoutlook = require("nodejs-nodemailer-outlook");


// =====================================
// |            MAIN ROUTES            |
// =====================================

router.get("/", (req, res)=>{
    res.locals.metaTags ={
        title: "", 
        des: "",   
        keywords: "" 
    }
    res.render("landing")
});

router.get("/about", (req, res)=>{
    res.locals.metaTags ={
        title:"",
        des:"",
        keywords:""
    }
    res.render("about")
});

router.get("/contact", (req, res)=>{
     res.locals.metaTags ={
        title:"",
        des:"",
        keywords:""
    }
    res.render("contact")
});

router.post("/contact/send", (req, res)=>{
    const output = `
    <p>Received a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Address: ${req.body.address}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone No: ${req.body.phone}</li>
        <li>Requested Service: ${req.body.service}</li>
        <li>Contact Me: ${req.body.contactMethod}</li>
    </ul>
    <h3>Message<h3>
    <p>${req.body.message}</p>
    `;
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: 'pyaesone.ii224@outlook.com',
            pass: 'lLp2!LWl'
        }
    });
    
    let mailOptions = {
        from: 'pyaesone.ii224@outlook.com',
        to: 'pyaesone.ii224@gmail.com',
        subject: 'New Customer Contact',
        html: output,
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(!err){
             req.flash("success","We recieved your contact details successfully, and we will reply to you shortly!");
             return res.redirect("/contact-us");
        }else{
            req.flash("error", "We are sorry, the service is under Maintenence!");
             return res.redirect("/contact-us");
        }
    });
});

router.get("/products", (req, res)=>{
     res.locals.metaTags ={
        title:"",
        des:"",
        keywords:""
    }
    res.render("product")
});

router.get("/projects", (req, res)=>{
    res.locals.metaTags ={
        title:"",
        des:"",
        keywords:""
    }
    res.render("project")
});




module.exports = router;