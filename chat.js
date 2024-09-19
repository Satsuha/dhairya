document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageBox = document.createElement('div');
        messageBox.className = 'message sent';
        messageBox.innerHTML = `<p>${messageText}</p>`; // Fixed string interpolation
        
        document.querySelector('.chat-box').appendChild(messageBox);
        messageInput.value = '';

        // Auto-scroll to the bottom
        const chatBox = document.querySelector('.chat-box');
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

document.getElementById('sendLocationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationMessage = `Location: <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">Click to view on map</a>`;
            
            const messageBox = document.createElement('div');
            messageBox.className = 'message sent';
            messageBox.innerHTML = `<p>${locationMessage}</p>`; // Fixed string interpolation
            
            document.querySelector('.chat-box').appendChild(messageBox);
            
            // Auto-scroll to the bottom
            const chatBox = document.querySelector('.chat-box');
            chatBox.scrollTop = chatBox.scrollHeight;
        }, error => {
            alert('Error getting location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

// Placeholder functions for call and video buttons
document.getElementById('callButton').addEventListener('click', function() {
    alert('Call feature is not implemented yet.');
});

document.getElementById('videoButton').addEventListener('click', function() {
    alert('Video feature is not implemented yet.');
});
