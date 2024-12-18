const employees = [
  {
    "id": 1,
    "name": "Ahmed Khan",
    "email": "employee1@example.com",
    "password": "1223",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "Project Planning",
        "task_description": "Plan the project timeline and milestones.",
        "task_date": "2023-11-05",
        "task_category": "Planning"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "fail": false,
        "task_title": "Client Meeting",
        "task_description": "Meet with the client to discuss requirements.",
        "task_date": "2023-11-10",
        "task_category": "Meeting"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "fail": false,
        "task_title": "Documentation",
        "task_description": "Complete project documentation.",
        "task_date": "2023-11-12",
        "task_category": "Documentation"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "fail": 0
    }
  },
  
  {
    "id": 2,
    "name": "Bilal Hussain",
    "email": "employee2@example.com",
    "password": "1223",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "Backend Development",
        "task_description": "Develop the API endpoints.",
        "task_date": "2023-11-06",
        "task_category": "Development"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "fail": true,
        "task_title": "Code Review",
        "task_description": "Review code for feature XYZ.",
        "task_date": "2023-11-08",
        "task_category": "Code Review"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "fail": false,
        "task_title": "Testing",
        "task_description": "Run tests on the new module.",
        "task_date": "2023-11-10",
        "task_category": "Testing"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 0,
      "fail": 1
    }
  },
  {
    "id": 3,
    "name": "Fatima Shah",
    "email": "employee3@example.com",
    "password": "1223",
    "tasks": [
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "fail": false,
        "task_title": "Design Review",
        "task_description": "Review the latest design mockups.",
        "task_date": "2023-11-07",
        "task_category": "Design"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "Feedback Session",
        "task_description": "Gather feedback from the design team.",
        "task_date": "2023-11-09",
        "task_category": "Feedback"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "fail": false,
        "task_title": "UI Improvements",
        "task_description": "Work on user interface improvements.",
        "task_date": "2023-11-12",
        "task_category": "Design"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "fail": 0
    }
  },
  {
    "id": 4,
    "name": "Hassan Ali",
    "email": "employee4@example.com",
    "password": "1223",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "Database Optimization",
        "task_description": "Optimize database queries.",
        "task_date": "2023-11-08",
        "task_category": "Database"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "fail": false,
        "task_title": "Setup Environment",
        "task_description": "Set up dev environment for new project.",
        "task_date": "2023-11-10",
        "task_category": "Setup"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "fail": false,
        "task_title": "Feature Implementation",
        "task_description": "Implement new feature as requested.",
        "task_date": "2023-11-13",
        "task_category": "Development"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "fail": 0
    }
  },
  {
    "id": 5,
    "name": "Ayesha Malik",
    "email": "employee5@example.com",
    "password": "1223",
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "System Upgrade",
        "task_description": "Upgrade system to latest version.",
        "task_date": "2023-11-11",
        "task_category": "Maintenance"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "fail": false,
        "task_title": "User Support",
        "task_description": "Provide support to end users.",
        "task_date": "2023-11-08",
        "task_category": "Support"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "fail": false,
        "task_title": "Performance Testing",
        "task_description": "Conduct performance testing.",
        "task_date": "2023-11-13",
        "task_category": "Testing"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 0,
      "fail": 0
    }
  }
];

  

const admin = [
    {
        "id": 101,
        "name": "Ahmed Khan",
        "email": "admin@example.com",
        "password": "1223"
      }
]

export const setLocalStorage =()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}
}
  