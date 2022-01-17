const express = require('express')
const router = express.Router()
const Register = require('../models/register')
const Products = require('../models/product')
const Purchase = require('../models/purchase')


router.get('/products' , async(req,res) => {
    try{
        const products = await Products.find({})
        res.json(products)
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
})

router.post('/register' , async(req,res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirm;

        if(password == cpassword){
            const registerEmployee = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                gender : req.body.gender,
                phone : req.body.phone,
                age : req.body.age,
                password : req.body.password,
                confirmpassword : req.body.confirm
            })
        

        await registerEmployee.save();
        res.status(200).json("success")
        }
        else{
            console.log("password dont match")
        }

    }catch(error){
      res.status(500).send(error);
      console.log(error)
    }
})

router.post('/login', async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

      const useremail =  await Register.findOne({email:email})
      
      if(useremail.password === password){
          res.status(200).send("Login successful")
      }else{
          res.send("invalid login details")
      }
       
    }catch(error){
      res.status(500).send(error);
      console.log(error)
    }
})

router.post('/ordered', async(req,res) => {
    try{
        const ordered = new Purchase({
             name: req.body.name,
             size: req.body.size,
             price: req.body.price,
             noOfQuantities: req.body.noOfQuantities,
             address: req.body.address,
        })
    

        await ordered.save();
        res.status(200).json("success")

       
    }catch(error){
      res.status(400).send(error);
      console.log(error)
    }
})


router.get('/products/:id' , async(req,res) => {
    try{
       const d = await Products.findById(req.params.id)
       res.json(d)
    }
    catch(err){
       res.status(500).send(err)
    }
})


module.exports = router