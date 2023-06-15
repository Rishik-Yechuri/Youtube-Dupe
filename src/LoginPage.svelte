
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

    const signUp = () => {
      // navigate('/signup');
    };

    export let toggle_logInPage;
    export let toggle_Signup;

    function goToSignup(){
      toggle_logInPage (false)
      toggle_Signup(true)
    };
  </script>
  
  <div>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button on:click={logIn}>Log in</button>
    <p>Don't have an account?</p>
	  <button on:click={goToSignup}>Sign Up</button >

  </div>
