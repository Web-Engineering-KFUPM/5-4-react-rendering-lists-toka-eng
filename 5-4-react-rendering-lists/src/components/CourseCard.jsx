// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

 export default function CourseCard({ course, index, onMutateCourse }) {
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  function deleteTask(id) {
    onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
  }

  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every((t) => t.isDone);

  return (
    <article className="card">
      <div className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3: All caught up badge ONLY when has tasks AND all done (&& فقط) */}
        {allDone && <span className="chip good">All caught up</span>}
      </div>

      {/* TASK 3: Empty state ONLY when no tasks (&& فقط) */}
      {course.tasks.length === 0 && <p className="empty">No tasks yet.</p>}

      <ul className="tasks">
        {/* TASK 2: Render tasks using map + key={task.id} */}
        {course.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </article>
  );
}

