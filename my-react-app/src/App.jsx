import React, { useState } from "react";
import { signUp, signIn, signOut, confirmSignUp } from "aws-amplify/auth";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState(null);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);

  // --- Handlers ---
  const handleSignUp = async () => {
    try {
      await signUp({
        username,
        password,
        options: { userAttributes: { email } },
      });
      setNeedsConfirmation(true);
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message);
    }
  };

  const handleConfirm = async () => {
    try {
      await confirmSignUp({ username, confirmationCode: code });
      alert("Account confirmed! You can now log in.");
      setNeedsConfirmation(false);
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

  // --- Screens ---
  if (!user && !needsConfirmation) {
    // Signup/Login screen
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200">
        <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
            DevOps Mock Interview Portal
          </h2>
          <input
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              onClick={handleSignUp}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Sign Up
            </button>
            <button
              onClick={handleSignIn}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (needsConfirmation) {
    // Confirmation screen
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Confirm Your Account
          </h2>
          <input
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirmation Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleConfirm}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Confirm Sign Up
          </button>
        </div>
      </div>
    );
  }

  // Interview dashboard
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">
          Welcome {user.username}
        </h1>
        <h2 className="text-xl font-semibold mb-6">DevOps Mock Interview</h2>
        <p className="mb-4 text-gray-600">Practice with these curated questions:</p>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border rounded-lg hover:shadow-md">
            Explain CI vs CD with examples.
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md">
            How would you design a scalable Kubernetes cluster?
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md">
            What’s the role of Infrastructure as Code?
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md">
            How do you monitor microservices in production?
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
