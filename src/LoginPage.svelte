<script>
  import { auth } from './firebase.js';
  import { fly } from 'svelte/transition';
  
  let email = '';
  let password = '';
  let errorMessage = '';
  
  async function logIn() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch(error) {
      console.error('Failed to sign in:', error);
      errorMessage = error.message;
    }
  }
  </script>
  
  <style>
 
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
      <div class="error">{{errorMessage}}</div>
    {/if}
  </div>