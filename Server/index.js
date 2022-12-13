import  express, { json }  from "express";
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "x37q1_wp631333"
})

app.use(express.json())
app.use(cors())

app.get("/products", (req, res) =>{
    const q = "SELECT id, post_title FROM `wp_631333_posts` WHERE `post_type` = 'product'"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/customers', (req, res) =>{
    const q = "SELECT meta_value, user_id FROM `wp_631333_usermeta` WHERE `meta_key`='billing_company'"
    db.query(q, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/customers/:id', (req, res) =>{
    const customer_id = req.params.id
    const q = "SELECT meta_value FROM `wp_631333_usermeta` WHERE user_id=?"
    db.query(q, [customer_id], (err,data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post('/customers/:meta_key', (req, res) =>{
    const meta_key = req.params.meta_key
    const q = "INSERT INTO `wp_631333_usermeta` WHERE meta_key="
    db.query(q, [customer_id], (err,data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8000, ()=>{
    console.log("Backend started")
})