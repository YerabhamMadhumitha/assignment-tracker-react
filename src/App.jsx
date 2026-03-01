import { useState, useEffect } from "react";

function App() {

  const [assignmentText, setAssignmentText] = useState("");
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("assignments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const handleAdd = () => {
    if (assignmentText.trim() === "") return;
    setAssignments([
      ...assignments,
      { text: assignmentText, completed: false }
    ]);
    setAssignmentText("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedAssignments = assignments.filter(
      (item, index) => index !== indexToDelete
    );
    setAssignments(updatedAssignments);
  };

  const handleToggle = (indexToToggle) => {
    const updateAssignments = assignments.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    })
    setAssignments(updateAssignments);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>Assignment Tracker</h1>
      <input placeholder="Enter assignment..."
        value={assignmentText}
        onChange={(e) => setAssignmentText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <span
              onClick={() => handleToggle(index)}
              style={{
                textDecoration: assignment.completed ? "line-through" : "none",
                cursor: "pointer"
              }}>

              {assignment.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button></li>))}
      </ul>
    </div>
  );
}
export default App;