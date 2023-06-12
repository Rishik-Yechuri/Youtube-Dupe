import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export async function logIn() {
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error('Failed to sign in:', error);
	}
}