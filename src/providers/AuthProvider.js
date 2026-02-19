'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	sendEmailVerification
} from 'firebase/auth';
import app from '@/firebase/firebase.config';

// Handle case where Firebase is not initialized (e.g., during build)
const auth = app ? getAuth(app) : null;
const googleProvider = app ? new GoogleAuthProvider() : null;
const githubProvider = app ? new GithubAuthProvider() : null;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const continueWithGoogle = () => {
		if (!auth || !googleProvider) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// sign in user with github
	const continueWithGithub = () => {
		if (!auth || !githubProvider) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout the user
	const logOutUser = () => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		return signOut(auth);
	};

	// update the user profile with name and photo
	const updateUserProfile = (name, photo) => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// sent reset password email.
	const resetPass = (email) => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		return sendPasswordResetEmail(auth, email);
	};

	// verify user email address
	const verifyEmail = () => {
		if (!auth) return Promise.reject(new Error('Firebase not initialized'));
		return sendEmailVerification(auth.currentUser);
	};

	// observing the user state
	useEffect(() => {
		if (!auth) {
			setLoading(false);
			return;
		}
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
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
