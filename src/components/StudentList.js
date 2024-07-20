import React from "react";
import { deleteStudent } from "../services/api";

export default function StudentList({
  students,
  setCurrentStudent,
  fetchStudents,
}) {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleClickLI = (e) => {
    console.log("target >> ", e.target);
    e.target.style.backgroundColor = "green";
  };

  return (
    <ul>
      {students.map((student) => (
        <li
          key={student.id}
          onClick={(e) => handleClickLI(e)}
          style={{ backgroundColor: "lightgray", cursor: "pointer" }}
        >
          {student.name} {student.surname} (Age: {student.age}, Score:{" "}
          {student.score})
          <button onClick={() => setCurrentStudent(student)}>Edit</button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
