<script>
	import { auth } from './firebase.js';
	import { onMount } from 'svelte';
	import LoginPage from './LoginPage.svelte';
  
	let name;
	let user;
  
	onMount(() => {
	  auth.onAuthStateChanged((_user) => {
		user = _user;
		name = _user ? _user.email : '';
	  });
	});
  </script>
  
  <main>
	{#if user}
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
  