// Save User Data
function saveUserData() {
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userPhone = document.getElementById('userPhone').value;
    
    // Save to Local Storage (for demo purposes)
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPhone', userPhone);
    
    // Show confirmation message
    alert('User data saved successfully!');
    
    // Update UI with saved data
    displayUserData();
}

// Display User Data
function displayUserData() {
    var savedUserName = localStorage.getItem('userName');
    var savedUserEmail = localStorage.getItem('userEmail');
    var savedUserPhone = localStorage.getItem('userPhone');

    if(savedUserName && savedUserEmail && savedUserPhone) {
        document.getElementById('displayUserName').innerText = 'Name: ' + savedUserName;
        document.getElementById('displayUserEmail').innerText = 'Email: ' + savedUserEmail;
        document.getElementById('displayUserPhone').innerText = 'Phone: ' + savedUserPhone;
    }
}

// On Page Load
window.onload = function() {
    displayUserData();
}