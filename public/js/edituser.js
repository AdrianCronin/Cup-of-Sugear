 
  const edituserFormHandler = async (event) => {
    // Stop the browser from submitting the form 
    event.preventDefault();

    // Get password from user
    const password = document.querySelector('#password-edit').value.trim();
 
    if (password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/edituser', {
        method: 'PUT',
        body: JSON.stringify({ password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/mygear');
      } else {
        document.location.replace('/homepage');
      }
    }
  };
  
 document.querySelector('.useredit-form').addEventListener('submit', edituserFormHandler);




 