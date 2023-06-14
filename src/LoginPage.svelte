<script>
  import { auth } from './firebase.js';
  import { fly } from 'svelte/transition';
  
  let email = '';
  let password = '';
  let errorMessage = '';
  
  async function logIn() {
    try {
      await auth.signInWithEmailAndPassword(email, password)  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
   //alert(errorMessage)
   errorMessage = error.message
    // ..
  });;
    } catch(error) {
      //alert('Failed to sign in:', error.message);
     // errorMessage = error.message;
    }
  }
  </script>
  
  <style>
    #login-form {
    text-align: center;
    padding: 1em;
 
    margin: 0 auto;
    background-color: blueviolet;
  }

  h2 {
    color: blue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  .error {
    color: white;
    background-color: red;
    padding: 1em;
    margin-top: 1em;
  }
  @media (min-width: 640px) {
    #login-form {
      max-width: none;
      background-color: brown;
    }
  }
  </style>
  
  <div id="login-form">
    <h2>Login</h2>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} placeholder="Email">
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} placeholder="Password">
    </div>
    <button on:click={logIn}>Log in</button>
    {#if errorMessage}
      <div class="error">{errorMessage}</div>
    {/if}
  </div>