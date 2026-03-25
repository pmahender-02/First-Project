import React, { useState } from "react";
import { signUp, signIn, signOut } from "aws-amplify/auth";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    try {
      await signUp({
        username,
        password,
        options: { userAttributes: { email } }
      });
      alert("Sign up successful! Check your email for confirmation.");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignIn = async () => {
    try {
      const loggedInUser = await signIn({ username, password });
      setUser(loggedInUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      ) : (
        <>
          <h2>Hello {user.username}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
}
