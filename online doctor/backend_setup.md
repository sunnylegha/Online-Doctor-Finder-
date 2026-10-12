# QuickHealer Backend Setup & MySQL Schema

As requested, while the current frontend application uses `localStorage` to simulate a database for immediate usability without a backend server, here is the exact MySQL database schema and backend connection logic required when you migrate to a Node.js/Express backend.

## 1. MySQL Database Schema

Execute the following SQL commands in your MySQL client to create the database and required tables.

```sql
-- Create the database
CREATE DATABASE IF NOT EXISTS online_doctor_db;

-- Use the database
USE online_doctor_db;

-- Create the login table
CREATE TABLE IF NOT EXISTS login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('patient', 'doctor', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default admin user (password should be hashed in a real scenario)
INSERT INTO login (name, email, password, role) 
VALUES ('System Admin', 'admin@quickhealer.com', 'admin123', 'admin');
```

## 2. Node.js Backend Connection Logic

If you are using Node.js with Express and the `mysql2` package, you can set up your database connection like this:

```javascript
const mysql = require('mysql2/promise');

// Create the connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'yourpassword', // Replace with your MySQL password
    database: 'online_doctor_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
```

## 3. Sample Login & Signup Handlers (Node.js)

```javascript
const express = require('express');
const pool = require('./db'); // the pool file above
const bcrypt = require('bcrypt'); // for password hashing
const app = express();

app.use(express.json());

// --- SIGNUP API ---
app.post('/api/signup', async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if user exists
        const [existing] = await pool.query("SELECT * FROM login WHERE email = ?", [email]);
        if (existing.length > 0) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const [result] = await pool.query(
            "INSERT INTO login (name, email, password, role) VALUES (?, ?, ?, ?)",
            [name, email, hashedPassword, role]
        );

        res.status(201).json({ message: "Account created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// --- LOGIN API ---
app.post('/api/login', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // Find user by email and role
        const [users] = await pool.query("SELECT * FROM login WHERE email = ? AND role = ?", [email, role]);
        
        if (users.length === 0) {
            return res.status(401).json({ error: "Invalid credentials or role mismatch" });
        }

        const user = users[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Success - in a real app, generate a JWT token here
        res.status(200).json({ 
            message: "Login successful", 
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Integration Instructions

1.  **Frontend Updates**: In `script.js`, replace the `localStorage` logic inside the `signupForm.addEventListener('submit', ...)` and `loginForm.addEventListener('submit', ...)` with `fetch()` calls to the `/api/signup` and `/api/login` endpoints defined above.
2.  **Security**: Ensure that plain passwords are never saved in the database. Use `bcrypt` as demonstrated to hash passwords on signup and compare them on login.
