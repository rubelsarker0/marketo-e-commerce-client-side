import {
	getAuth,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	GithubAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [databaseUser, setDatabaseUser] = useState({});

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const handleGithubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	const handleEmailPasswordRegister = (email, password, name) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const handleEmailPasswordLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const setUserName = (name) => {
		updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
	};

	const logOut = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		setLoading(true);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
	}, [auth]);

	useEffect(() => {
		setLoading(true);
		if (user) {
			fetch(`https://warm-everglades-86259.herokuapp.com/api/users/${user.uid}`)
				.then((res) => res.json())
				.then((data) => {
					setDatabaseUser(data);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		}
	}, [user]);

	return {
		user,
		setUser,
		databaseUser,
		handleGoogleSignIn,
		logOut,
		handleGithubSignIn,
		handleEmailPasswordRegister,
		setUserName,
		handleEmailPasswordLogin,
		loading,
		setLoading,
	};
};

export default useFirebase;
