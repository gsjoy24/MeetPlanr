'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import app from '@/firebase/firebase.config';

// Lazy import Firebase auth functions to prevent SSR issues
let auth = null;
let googleProvider = null;
let githubProvider = null;
let firebaseAuth = null;

// Only import Firebase auth in browser environment
if (typeof window !== 'undefined' && app) {
	const {
		getAuth,
		GoogleAuthProvider,
		GithubAuthProvider,
	} = require('firebase/auth');
	auth = getAuth(app);
	googleProvider = new GoogleAuthProvider();
	githubProvider = new GithubAuthProvider();
	firebaseAuth = require('firebase/auth');
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const continueWithGoogle = () => {
		if (!auth || !googleProvider || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithPopup(auth, googleProvider);
	};

	// sign in user with github
	const continueWithGithub = () => {
		if (!auth || !githubProvider || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithPopup(auth, githubProvider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithEmailAndPassword(auth, email, password);
	};

	// logout the user
	const logOutUser = () => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.signOut(auth);
	};

	// update the user profile with name and photo
	const updateUserProfile = (name, photo) => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// sent reset password email.
	const resetPass = (email) => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.sendPasswordResetEmail(auth, email);
	};

	// verify user email address
	const verifyEmail = () => {
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.sendEmailVerification(auth.currentUser);
	};

	// observing the user state
	useEffect(() => {
		if (!auth || !firebaseAuth) {
			setLoading(false);
			return;
		}
		const unsubscribe = firebaseAuth.onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		continueWithGoogle,
		continueWithGithub,
		updateUserProfile,
		loginWithEmail,
		logOutUser,
		resetPass,
		verifyEmail
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
