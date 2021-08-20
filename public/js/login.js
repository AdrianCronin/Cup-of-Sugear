const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form 
    event.preventDefault();
  
    // Get data from form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form 
    event.preventDefault();

    // Gather the data from the form elements on the page
    const first_name = document.querySelector('#fname-login').value.trim();
    const last_name = document.querySelector('#lname-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(first_name, last_name, email, password);

    if (first_name && last_name && email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  if(  document
    .querySelector('.login-form')) {
      document
      .querySelector('.login-form')
      .addEventListener('submit', loginFormHandler);
    }

if(    document
  .querySelector('.signup-form') 

)
 {
  document
  .querySelector('.signup-form') 
  .addEventListener('submit', signupFormHandler);
 }




 