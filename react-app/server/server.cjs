require('dotenv').config({ path: './config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "https://student-portal-dusky-rho.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// Retrieve your URI string from memory
const databaseUri = process.env.ATLAS_URI;

// Connect to MongoDB Atlas
mongoose.connect(databaseUri, {
    dbName: 'login_app' // Name of the database on your cloud cluster
})
.then(() => {
    console.log("🚀 Success: Connected to MongoDB Atlas Cloud Cluster!");
})
.catch((error) => {
    console.error("❌ Database connection error:", error.message);
});

// --- ADDED: 1. CREATE DATA MODEL SCHEMA 

const User=require('./db/User')

// This will create a collection (table) named "users" in your login_app database
// --- ADDED: 2. CREATE THE API POST ROUTE ---

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body; // 1. Unpack login credentials

        // 2. Query MongoDB for a user with this specific email
        const user = await User.findOne({ email: email });

        // 3. If no user matches that email, stop and return a 401 error
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // 4. Compare the incoming password with the password stored in the database
        // NOTE: In production, use bcrypt.compare(password, user.password) here!
        const isPasswordCorrect = (password === user.password);

        // 5. If the password is wrong, stop and return a 401 error
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // 6. Login successful! Send user data back (excluding the password)
        return res.status(200).json({
            message: "Login successful!",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                gender: user.gender,
                credits: user.credits,
                cgpa: user.cgpa,
                dob: user.dob,
                dept: user.dept,
                regNo : user.regNo,
                doj: user.doj,
                bGroup: user.bGroup,
                one: {
                    grades:{
                        calculus: user.one.grades.calculus,
                        tamil:user.one.grades.tamil,
                        python: user.one.grades.python
                    },
                    perc :{
                        calculus: user.one.perc.calculus,
                        tamil: user.one.perc.tamil,
                        python:user.one.perc.python
                    }
                },
                two:{
                    grades:{
                        proba: user.two.grades.proba,
                        tamilTech:user.two.grades.tamilTech,
                        C: user.two.grades.C
                    },
                    perc :{
                        proba: user.two.perc.proba,
                        tamilTech: user.two.perc.tamilTech,
                        C:user.two.perc.C
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Login Error:", error);
        return res.status(500).json({ error: "Internal Server Error during login" });
    }
});

app.post('/api/user', async (req, res) => {
    try {
        const { regNo,name,dept,doj,bGroup,email,credits,cgpa,dob,password,phone,gender,one,two } = req.body; // Unpack data from frontend

        // Create a new document instance using our schema layout
        const newUser = new User({ regNo,name,dept,doj,bGroup,email,credits,cgpa,dob,password,phone,gender,one,two });
        
        // Save the document into MongoDB Atlas
        await newUser.save();

        // Send a 201 Success Response back to the browser
        return res.status(201).json({ message: "Data successfully written to MongoDB Atlas!" });
    } catch (error) {
        console.error("❌ Database Insertion Error:", error);
        return res.status(500).json({ error: "Internal Server Error while saving data" });
    }
});

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
