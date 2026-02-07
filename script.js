// API Configuration
const API_URL = 'http://localhost:5000/api/notes';

// DOM Elements
const noteForm = document.getElementById('noteForm');
const notesContainer = document.getElementById('notesContainer');
const messageDiv = document.getElementById('message');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// Utility Functions
function showMessage(message, type = 'success') {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type} show`;
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function createNoteCard(note) {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.innerHTML = `
        <div class="note-title">${escapeHtml(note.title)}</div>
        <div class="note-description">${escapeHtml(note.description)}</div>
        <div class="note-date">${formatDate(note.createdAt)}</div>
    `;
    return noteCard;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// API Functions
async function fetchNotes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch notes');
        }
        const notes = await response.json();
        displayNotes(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        notesContainer.innerHTML = '<p class="error">Error loading notes. Please try again.</p>';
    }
}

async function addNote(title, description) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add note');
        }

        const newNote = await response.json();
        showMessage('Note added successfully!');
        noteForm.reset();
        fetchNotes(); // Refresh the notes list
        return newNote;
    } catch (error) {
        console.error('Error adding note:', error);
        showMessage(error.message || 'Error adding note. Please try again.', 'error');
    }
}

// UI Functions
function displayNotes(notes) {
    if (notes.length === 0) {
        notesContainer.innerHTML = '<p class="no-notes">No notes yet. Add your first note above!</p>';
        return;
    }

    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteCard = createNoteCard(note);
        notesContainer.appendChild(noteCard);
    });
}

// Event Listeners
noteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    
    if (!title || !description) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    await addNote(title, description);
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchNotes();
});

// Auto-refresh notes every 30 seconds (optional)
setInterval(fetchNotes, 30000);
