function fetchUsers() {
  const userList = document.getElementById('userList');
  const errorMsg = document.getElementById('errorMsg');

  userList.innerHTML = '';
  errorMsg.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user-card');
        div.innerHTML = `
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Address:</strong> ${user.address.street}, ${user.address.city}
        `;
        userList.appendChild(div);
      });
    })
    .catch(error => {
      errorMsg.textContent = `Error fetching users: ${error.message}`;
      errorMsg.classList.add('error');
    });
}

// Fetch users on page load
window.onload = fetchUsers;
