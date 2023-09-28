import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth(app);
    // console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleAuthSignIn = () => {
        // console.log(`google mama is coming`)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })

            .catch(error => {
                console.log(`error ${error.message}`);
            });
    }

    const handleGithubAuthSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(`error ${error.message}`);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
        })

        .catch(error => {
            console.log(`error ${error.message}`);
        });
        // navigate('/login');
        window.location.reload();
    }
    return (
        <div>
            <h1>login page</h1>

            {
                user ?
                <section>
                    <div>
                        <img src={user.photoURL} alt="" />
                        <h1>{user.displayName}</h1>
                        <p>{user.email}</p>
                    </div>
                    <button onClick={handleSignOut}>sign Out</button>
                </section>
                :
                <section>
                    <button className="border-2 mr-4" onClick={handleGoogleAuthSignIn}>Login with Google</button>
                    <button className="border-2 mr-4" onClick={handleGithubAuthSignIn}>Login with Github</button>
                </section>

            }
        </div>
    );
};

export default Login;