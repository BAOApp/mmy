document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loadingText = document.getElementById('loading');

    if (username === '2233gg' && password === '2233gg') {
        loadingText.textContent = 'Loading...';
        setTimeout(function() {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
        }, 1500);
    } else {
        loadingText.textContent = 'Incorrect login details';
    }
});

function checkConnection(action) {
    if (navigator.onLine) {
        alert(`${action} button clicked. Performing action...`);
    } else {
        showError();
    }
}

function showError() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('error-page').style.display = 'block';
}

function closeError() {
    document.getElementById('error-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}
