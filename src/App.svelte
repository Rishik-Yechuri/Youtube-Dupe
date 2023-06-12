<script>
	import { auth } from './firebase.js';
	import { onMount } from 'svelte';
	import { user } from './store.js'; // import the store
	import LoginPage from './LoginPage.svelte';
	
	let name;
	$user = null; // Initialize the user store to null
  
	onMount(() => {
	  auth.onAuthStateChanged((_user) => {
		user.set(_user); // Use the set function to change the store's value
		name = _user ? _user.email : '';
	  });
	});
  </script>
  
  <main>
	{#if $user} <!-- Use the $ prefix to access the current value of the store -->
	  <h1>Hello {name}!</h1>
	  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
	  <LoginPage />
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
  