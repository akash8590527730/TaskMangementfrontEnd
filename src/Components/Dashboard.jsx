import React from 'react'

const Dashboard = () => {
  return (
    <div class="bg-gray-50 min-h-screen">

    <header class="bg-blue-600 text-white p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Task Management Dashboard</h1>
        <a href="/tasks/create" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Create New Task
        </a>
      </div>
    </header>
  

    <main class="max-w-7xl mx-auto p-6">
    
      <div class="overflow-x-auto bg-white rounded-lg shadow-md mt-8">
        <table class="w-full table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-6 text-left">Title</th>
              <th class="py-3 px-6 text-left">Description</th>
              <th class="py-3 px-6 text-left">Start Date</th>
              <th class="py-3 px-6 text-left">End Date</th>
              <th class="py-3 px-6 text-left">Status</th>
              <th class="py-3 px-6 text-left">Progress</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
      
            <tr class="border-b hover:bg-gray-50">
              <td class="py-3 px-6">Task Title</td>
              <td class="py-3 px-6">Task description goes here...</td>
              <td class="py-3 px-6">2024-11-01</td>
              <td class="py-3 px-6">2024-11-10</td>
              <td class="py-3 px-6">In Progress</td>
              <td class="py-3 px-6">75%</td>
              <td class="py-3 px-6 text-center">
                <a href="/tasks/edit/taskId" class="bg-yellow-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-yellow-600">Edit</a>
                <button class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">Delete</button>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
  
 
      <div class="mt-4 flex justify-between items-center">
        <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50" disabled>Prev</button>
        <span class="text-sm">Page 1 of 5</span>
        <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50">Next</button>
      </div>
    </main>
  </div>
  
  )
}

export default Dashboard
