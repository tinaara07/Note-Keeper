const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// API Routes
app.get('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, 'db', 'db.json');
    
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading notes:', err);
            return res.status(500).json({ error: 'Failed to read notes' });
        }
        
        // Check if data is empty and return an empty array
        if (data.trim() === '') {
            return res.json([]);
        }

        res.json(JSON.parse(data));
    });
});

app.post('/api/notes', (req, res) => {
    console.log('Received POST request with body:', req.body); // Log the request body
    const newNote = {
        id: uuidv4(), // Generate a unique ID
        title: req.body.title,
        text: req.body.text
    };

    const dbPath = path.join(__dirname, 'db', 'db.json');

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading notes:', err);
            return res.status(500).json({ error: 'Failed to read notes' });
        }
        
        const notes = data.trim() === '' ? [] : JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error('Error saving note:', err);
                return res.status(500).json({ error: 'Failed to save note' });
            }
            res.json(newNote);
        });
    });
});

// DELETE route to remove a note by ID
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const dbPath = path.join(__dirname, 'db', 'db.json');

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading notes:', err);
            return res.status(500).json({ error: 'Failed to read notes' });
        }

        let notes = data.trim() === '' ? [] : JSON.parse(data);
        
        // Filter out the note with the given ID
        notes = notes.filter(note => note.id !== noteId);

        fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error('Error deleting note:', err);
                return res.status(500).json({ error: 'Failed to delete note' });
            }

            res.status(204).send(); // No content to send back
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});