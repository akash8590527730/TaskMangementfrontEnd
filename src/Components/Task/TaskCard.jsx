import React from 'react';

const TaskForm = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create New Task</h2>
      <form>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
          <input
            id="startDate"
            type="date"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
          <input
            id="endDate"
            type="date"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-semibold text-gray-700">Status</label>
          <select
            id="status"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <label htmlFor="progress" className="block text-sm font-semibold text-gray-700">Progress (%)</label>
          <input
            id="progress"
            type="number"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
            required
          />
        </div>

        {/* Reminder */}
        <div className="mb-6">
          <label htmlFor="reminder" className="block text-sm font-semibold text-gray-700">Reminder</label>
          <input
            id="reminder"
            type="datetime-local"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
