<script>


    let firstName = '';
    let lastName = '';
    let email = '';
    let username = '';
  
    function submitForm() {
      console.log(`First Name: ${firstName}`);
      console.log(`Last Name: ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Username: ${username}`);
    }
  
    function navigateToLogin() {
      console.log('Navigating to Login...');
    }
  </script>
  
  <style>
    .container {
      font-family: Arial, sans-serif;
      text-align: center;
    }
  
    .container h1 {
      color: #333;
    }
  
    .container input {
      display: block;
      margin: 10px auto;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 200px;
    }
  
    .container button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007BFF;
      color: #fff;
      cursor: pointer;
    }
  
    .login-btn {
      margin-top: 20px;
      background-color: #28a745;
    }
  </style>
  
  <div class="container">
    <h1>Sign Up Page</h1>
    <div>
      <input type="text" bind:value={firstName} placeholder="First Name" required>
      <input type="text" bind:value={lastName} placeholder="Last Name" required>
      <input type="email" bind:value={email} placeholder="Email" required>
      <input type="text" bind:value={username} placeholder="Username" required>
      <!-- <button on:click={submitForm}>Sign Up</button> -->
    </div>
    <p>Already have an account?</p>
    <button class="login-btn" on:click={navigateToLogin}>Log In</button>
  </div>
  