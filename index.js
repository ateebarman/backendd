const express = require('express');

const app = express();

const data = {
    "name": "Ateeb Arman",
    "age": 22,
    "email": "ateeb.arman@example.com",
    "phone": "+91-9876543210",
    "address": {
      "street": "123 Tech Street",
      "city": "Sri City",
      "state": "Andhra Pradesh",
      "country": "India",
      "zipcode": "517646"
    },
    "education": {
      "highSchool": {
        "name": "JNV High School",
        "board": "CBSE",
        "percentage": 96,
        "year": 2019
      },
      "seniorSecondary": {
        "name": "JNV Senior School",
        "board": "CBSE",
        "percentage": 91,
        "year": 2021
      },
      "university": {
        "name": "IIIT Sri City",
        "degree": "B.Tech",
        "major": "Computer Science",
        "cgpa": 8.7,
        "year": 2025
      }
    },
    "skills": [
      "C++",
      "Data Structures",
      "Algorithms",
      "OpenGL",
      "React.js",
      "Node.js",
      "Machine Learning",
      "NLP",
      "Computer Graphics"
    ],
    "projects": [
      {
        "title": "Car Rental Service",
        "description": "A web application for booking and managing car rentals.",
        "technologies": ["React", "Node.js", "MongoDB"],
        "status": "In Progress"
      },
      {
        "title": "Amazon Review Sentiment Analysis",
        "description": "An NLP-based sentiment analysis system for Amazon reviews.",
        "technologies": ["Python", "NLTK", "Pandas"],
        "status": "Completed"
      },
      {
        "title": "OpenGL Snake Game",
        "description": "A game with four types of snake variations using OpenGL.",
        "technologies": ["C++", "OpenGL"],
        "status": "In Progress"
      }
    ],
    "achievements": [
      "AIR 299 in IMUCET",
      "Rank 8000 in JEE Advanced",
      "Rank 18000 in JEE Mains",
      "Best Tutor Award for Maths & Physics"
    ],
    "experience": [
      {
        "role": "Tutor",
        "field": "Maths and Physics",
        "duration": "2 years"
      },
      {
        "role": "Software Developer Intern",
        "company": "Tech Solutions Ltd.",
        "duration": "3 months"
      }
    ],
    "hobbies": ["Problem Solving", "Gaming", "Watching Sci-Fi Movies", "Teaching"]
  };
  
require('dotenv').config();

app.get('/', (req, res)=>{

res.send('some thing');

});

app.get('/login', (req, res)=>{

res.send('<h1>hii this is login page</h1>');
    
 });
 app.get('/logs', (req, res)=>{

res.json(data);        
});

const port = 4000;

app.listen(process.env.PORT, ()=>{

console.log(`http://localhost:${process.env.PORT}`)

})