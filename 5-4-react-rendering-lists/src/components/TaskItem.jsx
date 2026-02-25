// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <div className="taskMain">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.isDone ? "done" : ""}>{task.title}</span>

        {/* TASK 3: show DueBadge ONLY when NOT done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}
      </div>

      <button className="ghost" onClick={() => onDelete(task.id)} aria-label="Delete">
        ✕
      </button>
    </li>
  );
}