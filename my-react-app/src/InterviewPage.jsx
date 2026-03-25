import React from "react";

export default function InterviewPage({ user, onSignOut }) {
  <div className="min-h-screen bg-gray-50 p-10">
  <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
    <h1 className="text-3xl font-bold mb-4">Welcome {user.username}</h1>
    <h2 className="text-xl font-semibold mb-6">DevOps Mock Interview</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Explain CI vs CD with examples.</li>
      <li>How would you design a scalable Kubernetes cluster?</li>
      <li>What’s the role of Infrastructure as Code?</li>
      <li>How do you monitor microservices in production?</li>
    </ul>
    <button
      onClick={onSignOut}
      className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Sign Out
    </button>
    </div>
    </div>
}
