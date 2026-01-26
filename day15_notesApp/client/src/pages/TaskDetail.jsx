import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTaskById } from "../services/api";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getTaskById(id);
        setTask(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTask();
  }, [id]);

  if (!task) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-blue-600 text-sm">← Back</Link>

      <h1 className="text-2xl font-bold mt-4">{task.heading}</h1>
      <p className="mt-2 text-gray-700">{task.content}</p>
    </div>
  );
};

export default TaskDetail;
