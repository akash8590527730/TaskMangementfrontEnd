import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Task List</h2>

      {/* Task List */}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Title</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
            <th className="px-4 py-2 border-b text-left">Progress</th>
            <th className="px-4 py-2 border-b text-left">Start Date</th>
            <th className="px-4 py-2 border-b text-left">End Date</th>
            <th className="px-4 py-2 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Static Task Data */}
          <tr>
            <td className="px-4 py-2 border-b">Task 1</td>
            <td className="px-4 py-2 border-b">In Progress</td>
            <td className="px-4 py-2 border-b">50%</td>
            <td className="px-4 py-2 border-b">2024-11-01</td>
            <td className="px-4 py-2 border-b">2024-11-30</td>
            <td className="px-4 py-2 border-b">
              <Link
                to={`/tasks/edit/1`}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </Link>
              <button className="ml-4 text-red-600 hover:text-red-800">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Task 2</td>
            <td className="px-4 py-2 border-b">Completed</td>
            <td className="px-4 py-2 border-b">100%</td>
            <td className="px-4 py-2 border-b">2024-10-01</td>
            <td className="px-4 py-2 border-b">2024-10-31</td>
            <td className="px-4 py-2 border-b">
              <Link
                to={`/tasks/edit/2`}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </Link>
              <button className="ml-4 text-red-600 hover:text-red-800">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
