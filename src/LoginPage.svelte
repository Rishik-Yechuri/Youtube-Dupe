<script>
    import { auth } from './firebase.js';
  
    let email = '';
    let password = '';
  
    async function logIn() {
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.error('Failed to sign in:', error);
      }
    }
  </script>
  
  <div>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button on:click={logIn}>Log in</button>
  </div>
  