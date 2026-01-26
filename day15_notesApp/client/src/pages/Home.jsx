import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const Home = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>

      {tasks.map((task) => (
        <div
          key={task._id}
          className="border p-3 mb-3 rounded flex justify-between items-center"
        >
          <h2 className="font-medium">{task.heading}</h2>

          <Link
            to={`/notes/${task._id}`}
            className="text-blue-600 text-sm"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
