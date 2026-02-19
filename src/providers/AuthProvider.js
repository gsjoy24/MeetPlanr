'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import app from '@/firebase/firebase.config';

const AuthContext = createContext();

// Lazy initialization function for Firebase auth
let authInitialized = false;
let auth = null;
let googleProvider = null;
let githubProvider = null;
let firebaseAuth = null;

const initializeFirebaseAuth = () => {
	if (authInitialized || typeof window === 'undefined' || !app) {
		return;
	}
	
	try {
		firebaseAuth = require('firebase/auth');
		auth = firebaseAuth.getAuth(app);
		googleProvider = new firebaseAuth.GoogleAuthProvider();
		githubProvider = new firebaseAuth.GithubAuthProvider();
		authInitialized = true;
	} catch (error) {
		console.warn('Failed to initialize Firebase auth:', error);
	}
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Initialize Firebase auth on mount
	useEffect(() => {
		initializeFirebaseAuth();
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

	// create a new user
	const createUser = (email, password) => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const continueWithGoogle = () => {
		initializeFirebaseAuth();
		if (!auth || !googleProvider || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithPopup(auth, googleProvider);
	};

	// sign in user with github
	const continueWithGithub = () => {
		initializeFirebaseAuth();
		if (!auth || !githubProvider || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithPopup(auth, githubProvider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.signInWithEmailAndPassword(auth, email, password);
	};

	// logout the user
	const logOutUser = () => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.signOut(auth);
	};

	// update the user profile with name and photo
	const updateUserProfile = (name, photo) => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return firebaseAuth.updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// sent reset password email.
	const resetPass = (email) => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.sendPasswordResetEmail(auth, email);
	};

	// verify user email address
	const verifyEmail = () => {
		initializeFirebaseAuth();
		if (!auth || !firebaseAuth) return Promise.reject(new Error('Firebase not initialized'));
		return firebaseAuth.sendEmailVerification(auth.currentUser);
	};

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
