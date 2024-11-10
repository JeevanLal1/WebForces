// index.js
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

//stablishing connection with database
const db = new pg.Client({
  user : 'postgres',
  host : 'localhost',
  database : 'student',
  password : 'Jitendra@05',
  port : 5432
});
db.connect();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route for rendering home page initially for login
app.get('/', (req, res) => {
  res.render('login.ejs', { message: null }); // Initially, no message is displayed
});

// Route for rendering the login page
app.get('/login', (req, res) => {
    res.render('login.ejs', { message: null }); // Initially, no message is displayed
});

// Route for rendering the signup page
app.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: null });
});

// Route for handling login logic
app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let user = [];

    try {
      const result = await db.query("SELECT * FROM users");
      user = result.rows;
      const userIndex = user.findIndex((u)=> u.username===username);

      // Simple login logic
      if (userIndex>-1) { 
        const isMatch = await bcrypt.compare(password, user[userIndex].password);
        if(isMatch){
          res.render('login.ejs', { message: 'Login successful!' });
        } else {
          res.render('login.ejs', { message: 'Invalid password' });
        }
      } else {
          res.render('login.ejs', { message: 'Invalid username' });
      }
    } catch (error) {
      console.error('Error in login:', error);
      res.render('login.ejs', { message: 'An error occurred. Please try again.' });
    }

});

//Route for handling signup logic
app.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, 10);


  // Simple login logic
  try {
    // Check if the username already exists
    const userExists = await db.query("SELECT * FROM users WHERE username = $1", [username]);

    if (userExists.rows.length > 0) {
      res.render('signup.ejs', { message: 'Username already taken. Please try another.' });
    } else {
      // Hash the password and insert the new user
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hashedPassword]);
      res.render('login.ejs', { message: 'Signup successful! Please login.' });
    }
  } catch (error) {
    console.error('Error in signup:', error);
    res.render('signup.ejs', { message: 'An error occurred. Please try again.' });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
