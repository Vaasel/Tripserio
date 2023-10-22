document.getElementById('login-btn').addEventListener('click', loginUser);
document.getElementById('sendMessage').addEventListener('click', sendMessage);
document.getElementById('setReceiverBtn').addEventListener('click', setReceiver);
var socket = io();

function loginUser(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace 'YOUR_API_URL' with the actual URL of your server-side endpoint to handle the login request.
    const apiUrl = 'http://localhost:5000/user/login';

    const requestData = {
        email: username,
        password: password
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data here (e.g., display a success message or redirect the user).
            console.log(data);
            socket.emit("join", data.userId)
            // Example: display a success message
            document.getElementById('error-message').textContent = 'Login successful!';
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request.
            console.error('Fetch error:', error);
            // Example: display an error message
            document.getElementById('error-message').textContent = 'Login failed. Please try again.';
        });
}

function sendMessage(e) {
    e.preventDefault();
    const message = document.getElementById('userMessage').value;

    // Replace 'YOUR_API_URL' with the actual URL of your server-side endpoint to handle the login request.
    const apiUrl = 'http://localhost:5000/chat/sendMessage';

    const requestData = {
        message
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data here (e.g., display a success message or redirect the user).
            console.log(data);
            // Example: display a success message
            document.getElementById('error-message').textContent = 'Login successful!';
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request.
            console.error('Fetch error:', error);
            // Example: display an error message
            document.getElementById('error-message').textContent = 'Login failed. Please try again.';
        });
}


function setReceiver(e) {
    e.preventDefault();
    const receiverId = document.getElementById('setReceiver').value;

    // Replace 'YOUR_API_URL' with the actual URL of your server-side endpoint to handle the login request.
    const apiUrl = 'http://localhost:5000/chat/setReceiver';

    const requestData = {
        receiverId
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data here (e.g., display a success message or redirect the user).
            console.log(data);
            // Example: display a success message
            document.getElementById('error-message').textContent = 'Login successful!';
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request.
            console.error('Fetch error:', error);
            // Example: display an error message
            document.getElementById('error-message').textContent = 'Login failed. Please try again.';
        });
}

socket.on("message", (messages) => {
    console.log(messages, "i am from client socket")
})