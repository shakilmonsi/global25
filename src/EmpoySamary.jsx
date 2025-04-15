const EmpoySamary = () => {
  const employee = {
    name: "Liam Smith",
    role: "Software Engineer",
    teamLead: "Sophia Brown",
    department: "Development",
    salary: 75000,
    totalWorkingDays: 250,
    leaveTaken: 18,
    leaveBalance: 7,
    projects: [
      { name: "Inventory App", status: "Completed" },
      { name: "HR Portal", status: "In Progress" },
      { name: "CRM Tool", status: "Completed" },
    ],
  };

  const dataCards = [
    { label: "Name", value: employee.name },
    { label: "Role", value: employee.role },
    { label: "Team Lead", value: employee.teamLead },
    { label: "Department", value: employee.department },
    { label: "Annual Salary", value: `$${employee.salary.toLocaleString()}` },
    { label: "Working Days", value: employee.totalWorkingDays },
    { label: "Leaves Taken", value: employee.leaveTaken },
    { label: "Leave Balance", value: employee.leaveBalance },
    { label: "Total Projects", value: employee.projects.length },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Employee Summary
      </h2>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataCards.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 text-white"
          >
            <p className="text-sm text-gray-300 mb-1">{item.label}</p>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Project List */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-accent mb-3 text-white">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employee.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 text-white"
            >
              <p className="font-semibold">{project.name}</p>
              <p className="text-sm text-gray-300">{project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoySamary;
