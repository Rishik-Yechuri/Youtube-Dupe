<script>
  import { auth } from './firebase.js';
  import { user } from './store.js';  // import the store
  import { fly } from 'svelte/transition';  // import the fly transition

  let email = '';
  let password = '';
  let errorMessage = '';  // this will hold the error message

  async function logIn() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Failed to sign in:', error);
      errorMessage = error.message;  // display the error message
    }
  }
</script>

<div>
  <input type="email" bind:value={email} placeholder="Email">
  <input type="password" bind:value={password} placeholder="Password">
  <button on:click={logIn}>Log in</button>
  {#if errorMessage}  <!-- display the error message if there is one -->
    <div class="error" transition:fly="{{ y: 200, duration: 500, delay: 0}}">{errorMessage}</div>
  {/if}
</div>

<style>
  .error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
</style>
