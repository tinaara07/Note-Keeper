# Note-Taker
Description
The Note Taker application allows users to easily create, view, edit, and delete notes in a user-friendly web interface. It provides a simple way to save, manage, and organize notes, as well as view and delete existing ones.

Key features include:

A landing page with a link to a notes page.
A dynamic notes page where users can add, view, edit, and delete notes.
An intuitive interface to manage the notes, including a delete option for each note.
Features
Landing Page: Upon opening the application, users are presented with a landing page that includes a link to access the notes page.

Notes Page: Clicking the link takes the user to the notes page, where existing notes are displayed in the left-hand column, and there are fields for creating a new note in the right-hand column.

Add New Note: Users can enter a new note title and text. Once filled out, the "Save Note" and "Clear Form" buttons will appear in the navigation bar. Clicking "Save Note" will save the note and display it in the left-hand column.

View Existing Notes: Clicking on an existing note in the left-hand column will populate the right-hand column with the note’s title and text.

New Note Option: After viewing an existing note, the "New Note" button appears in the navigation bar. Clicking this button clears the right-hand column for entering a new note.

Delete Notes: Users can delete any note from the left-hand column. A "Delete" button will be added to each existing note, allowing users to remove notes they no longer need.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/note-taker.git
Navigate into the project directory:

bash
Copy code
cd note-taker
Install dependencies using npm:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The app should now be running on http://localhost:3000.

Usage
Add a New Note: Navigate to the "Notes" page and enter a title and text for the note. Click the "Save Note" button to save it.

View Existing Notes: Click on any note in the left-hand column to view its contents in the right-hand column.

Delete Notes: To delete a note, click the "Delete" button next to the note in the left-hand column. This will remove the note from the interface and delete it from the backend.

Create Another Note: After viewing a note, click the "New Note" button to clear the form and start a new note.

Clear Form: If you want to discard the note you’re currently writing, click the "Clear Form" button.

Technologies Used
HTML
CSS
JavaScript
Node.js
Express.js (for backend)
File System (for storing notes)

