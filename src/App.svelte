<script>
	import { auth } from './firebase.js';
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';
	import LoginPage from './LoginPage.svelte';
	import Signup from './routes/Signup.svelte';
	
	import { Router, Route } from 'svelte-routing';


	let name;
	let user;

	let onSignedUp = false;
	let onLoggedIn = true;

	onMount(() => {
	  auth.onAuthStateChanged((_user) => {
		user = _user;
		name = _user ? _user.email : '';
	  });
	});
	
	function toggle_logInPage(val){
		onLoggedIn = val;
	}
	function toggle_Signup(val){
      onSignedUp = val;
    };
  </script>

  <main>
	<p>LOG IN Page</p>
	{#if user}
	  <h1>Hello {name}!</h1>
	  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else if onLoggedIn}
	  <LoginPage toggle_logInPage = {toggle_logInPage} LoginPage toggle_Signup = {toggle_Signup}/>
	{:else if onSignedUp}
	  <Signup LoginPage toggle_Signup = {toggle_Signup} toggle_logInPage = {toggle_logInPage}/>
	{/if}
  </main>



  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 240px;
	  margin: 0 auto;
	}
  
	h1 {
	  color: #ff3e00;
	  text-transform: uppercase;
	  font-size: 4em;
	  font-weight: 100;
	}
  
	@media (min-width: 640px) {
	  main {
		max-width: none;
	  }
	}
  </style>
  