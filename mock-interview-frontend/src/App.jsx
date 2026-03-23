import { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mock Interview Questions</h1>
      <ul>
        {questions.map(q => (
          <li key={q.id} className="mb-2">{q.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
