const employees = [
  {
    id: 101,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "JavaScript",
    salary: 95000,
    yearsOfExperience: 6,
    isRemote: true,
    email: "sarah.johnson@company.com"
  },
  {
    id: 102,
    name: "Michael Chen",
    department: "Engineering",
    position: "Junior Developer",
    primarySkill: "Python",
    salary: 65000,
    yearsOfExperience: 2,
    isRemote: false,
    email: "michael.chen@company.com"
  },
  {
    id: 103,
    name: "Emily Rodriguez",
    department: "Marketing",
    position: "Marketing Manager",
    primarySkill: "SEO",
    salary: 78000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "emily.rodriguez@company.com"
  },
  {
    id: 104,
    name: "David Kim",
    department: "Engineering",
    position: "DevOps Engineer",
    primarySkill: "Docker",
    salary: 92000,
    yearsOfExperience: 7,
    isRemote: true,
    email: "david.kim@company.com"
  },
  {
    id: 105,
    name: "Lisa Anderson",
    department: "Sales",
    position: "Sales Representative",
    primarySkill: "Negotiation",
    salary: 72000,
    yearsOfExperience: 4,
    isRemote: false,
    email: "lisa.anderson@company.com"
  },
  {
    id: 106,
    name: "James Wilson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "Java",
    salary: 98000,
    yearsOfExperience: 8,
    isRemote: true,
    email: "james.wilson@company.com"
  },
  {
    id: 107,
    name: "Rachel Green",
    department: "Engineering",
    position: "Frontend Developer",
    primarySkill: "JavaScript",
    salary: 88000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "rachel.green@company.com"
  }
];

const newHires = [
    {
        id: 108,
        name: "Anna Taylor", 
        department: "HR", 
        position: "HR Specialist", 
        primarySkill: "Recruitment", 
        salary: 68000, 
        yearsofExperience: 3, 
        isRemote: false, 
        email: "anna.taylor@company.com"
    },
    {
        id: 109, 
        name: "Tom Brooks", 
        department: "Engineering", 
        position: "Backend Developer", 
        primarySkill: "Node.js", 
        salary: 85000, 
        yearsofExperience: 4, 
        isRemote: true, 
        email: "tom.brooks@company.com" 
    }
];

function showAllEmployees () {
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> All Employees (${employees.length})</div>
    `;

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        console.log(employee);

        html += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>📧 ${employee.email}</p>
                <p>🏢 ${employee.department}</p>
                <p>💼 ${employee.position}</p>
                <p>🛠️ ${employee.primarySkill}</p>
                <p>💰 $${employee.salary}</p>
                <p>🗓️ ${employee.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${employee.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }
    grid.innerHTML = html;
    filter.innerHTML = infoHTML;
}

function question1 () { 
const departments = employees.map(emp => emp.department);
const dept = departments.includes("Marketing");
console.log(departments);
console.log(dept);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q1 includes() - Marketing departments exists: ${dept}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Q1: includes()</h2>
               <p>Does 'Marketing' department exist? ${dept}</p>
               <div>Departments list: ${departments}</div>
            </div>
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question2 () {
// Q2: Create an array of all employee names. 
// Then find the index position of "David Kim" in that array.
const names = employees.map(emp => emp.name);
const nameEmp = names.indexOf("David Kim");
const david = employees.find(emp => emp.name === "David Kim")
console.log(names);
console.log(nameEmp);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q2 indexOf() - David Kim found at index: ${nameEmp}</div>
    `;

    html += `
        
      <div class="result-box">
        <h2>Q2: indexOf()</h2>
        <p>David Kim is at index: ${nameEmp}</p>
      </div> 
          <div>
            <div class="employee-card">
                    <h3>${david.name}</h3>
                    <p>📧 ${david.email}</p>
                    <p>🏢 ${david.department}</p>
                    <p>💼 ${david.position}</p>
                    <p>🛠️ ${david.primarySkill}</p>
                    <p>💰 $${david.salary}</p>
                    <p>🗓️ ${david.yearsOfExperience} years of experience</p>
                    <p class="remote-box" style="color: white;">${david.isRemote ? "🏠 Home" : "🏢 Office"}</p>
                </div>
          </div>

        
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question3 () {
// Q3: Find the first employee who works in the "Marketing" department. 
const deptMarket = employees.find(emp => emp.department === "Marketing");
console.log(deptMarket);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q3 find() - Find Marketing employee: ${deptMarket.name}</div>
    `;

    html += `
        
        <div class="result-box">
            <h2>Q3: find()</h2>
            <p>First marketing employee found: ${deptMarket.name}</p>
        </div>
           <div>
               <div class="employee-card">
                    <h3>${deptMarket.name}</h3>
                    <p>📧 ${deptMarket.email}</p>
                    <p>🏢 ${deptMarket.department}</p>
                    <p>💼 ${deptMarket.position}</p>
                    <p>🛠️ ${deptMarket.primarySkill}</p>
                    <p>💰 $${deptMarket.salary}</p>
                    <p>🗓️ ${deptMarket.yearsOfExperience} years of experience</p>
                    <p class="remote-box" style="color: white;">${deptMarket.isRemote ? "🏠 Home" : "🏢 Office"}</p>
                </div>
           </div>

    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question4 () {
// Q4: Find the index of the employee with id 104 in the employees array.
const index = employees.findIndex(emp => emp.id === 104);
const idIndex = employees.find(emp => emp.id === 104)
console.log(index); 
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q4 findIndex() - Employee ID 104 found at index: ${index}</div>
    `;

    html += `
        
        <div class="result-box">
            <h2>Q4: findIndex()</h2>
            <p>Employee with ID 104 is at index: ${index}</p>
        </div>
          
                <div class="employee-card">
                    <h3>${idIndex.name}</h3>
                    <p>📧 ${idIndex.email}</p>
                    <p>🏢 ${idIndex.department}</p>
                    <p>💼 ${idIndex.position}</p>
                    <p>🛠️ ${idIndex.primarySkill}</p>
                    <p>💰 $${idIndex.salary}</p>
                    <p>🗓️ ${idIndex.yearsOfExperience} years of experience</p>
                    <p class="remote-box" style="color: white;">${idIndex.isRemote ? "🏠 Home" : "🏢 Office"}</p>
                </div>
           

            
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question5 () {
// Q5: Check if at least one employee has more than 7 years of experience.
const exp = employees.some(emp => emp.yearsOfExperience > 7);
const expEmp = employees.filter(emp => emp.yearsOfExperience > 7);
const experienced = employees.find(emp => emp.yearsOfExperience > 7);
console.log(exp);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q5 some() - Employees with > 7 years: ${exp}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Q5: some()</h2>
               <p>Are there any employees with > 7 years of experience? ${exp}</p>
               <p>Found ${expEmp.length} employee(s)</p>
            </div>

            <div class="employee-card">
                    <h3>${experienced.name}</h3>
                    <p>📧 ${experienced.email}</p>
                    <p>🏢 ${experienced.nddepartment}</p>
                    <p>💼 ${experienced.position}</p>
                    <p>🛠️ ${experienced.primarySkill}</p>
                    <p>💰 $${experienced.salary}</p>
                    <p>🗓️ ${experienced.yearsOfExperience} years of experience</p>
                    <p class="remote-box" style="color: white;">${experienced.isRemote ? "🏠 Home" : "🏢 Office"}</p>
                </div>
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question6 () {
// Q6: First, filter all employees who work in the Engineering department. 
// Then check if every one of those Engineering employees is a remote worker. 
const engineers = employees.filter(emp => emp.department === "Engineering");
const allRemote = engineers.every(emp => emp.isRemote === true);
console.log(engineers);
console.log(allRemote);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q6 every() - All Engineering remote: ${allRemote}</div>
    `;

    html += `
        <div class="result-box">
            <h2>Q6: every()</h2>
            <p>Are all Engineering employees remote? ${allRemote}</p>
        </div>
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question7 () {
// Q7: Get all employees who are remote workers AND earn more than $80,000.
const remoteEarners = employees.filter(emp => emp.isRemote === true && emp.salary > 80000);
console.log(remoteEarners); 
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q7 filter() - Remote employees earning > $80,000 (${remoteEarners.length})</div>
    `;

    html += `
        
           <div class="result-box">
               <h2>Q7: filter()</h2>
               <p>Remote employees earning > $80,000: ${remoteEarners.length} found</p>
            </div>
    `;

    for (let i = 0; i < remoteEarners.length; i++) {
        const remote = remoteEarners[i];
        console.log(remoteEarners);

        html += `
            <div class="employee-card">
                <h3>${remote.name}</h3>
                <p>📧 ${remote.email}</p>
                <p>🏢 ${remote.department}</p>
                <p>💼 ${remote.position}</p>
                <p>🛠️ ${remote.primarySkill}</p>
                <p>💰 $${remote.salary}</p>
                <p>🗓️ ${remote.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${remote.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }

    
    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question8 () {
// Q8: Create a new array that contains objects with only the name and email 
// of each employee. Format: { name: ...", email: } 
const transform = employees.map((emp) => { return {
    name: emp.name,
    email: emp.email
}});
console.log(transform);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q8 map() - Name & Email only (${transform.length})</div>
    `;

    html += `
           <div class="result-box">
               <h2>Q8: map()</h2>
               <p>Mapped to Name & Email only: ${transform.length} employees</p>
            </div>
        
    `;

     for (let i = 0; i < transform.length; i++) {
        const mapped = transform[i];
        console.log(mapped);

        html += `
            <div class="employee-card">
                <h3>${mapped.name}</h3>
                <p>📧 ${mapped.email}</p>
            </div>
        `;
    }


    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question9 () {
// Q9: Create an array of all unique departments (no duplicates). // Then join them into a single comma-separated string.
const depts = employees.map(emp => emp.department);
const uniqueDept = depts.filter((dept, index) => depts.indexOf(dept) === index);
const connect = uniqueDept.join(", ");
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q9 find() - Departments: ${connect}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Q9: join()</h2>
               <p>Unique departments joined: ${connect}</p>
            </div>
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function question10 () {
const allEmployees = employees.concat(newHires);
console.log(allEmployees);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Q10 concat() - Total employees: ${allEmployees.length}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Q10: concat)</h2>
               <p>Total employees after adding new hires: ${allEmployees.length}</p>
               <p>Original: ${employees.length} + New hires: ${newHires.length}</p>
               </div>
    `;

    for (let i = 0; i < allEmployees.length; i++) {
        const employee = allEmployees[i];
        console.log(employee);

        html += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>📧 ${employee.email}</p>
                <p>🏢 ${employee.department}</p>
                <p>💼 ${employee.position}</p>
                <p>🛠️ ${employee.primarySkill}</p>
                <p>💰 $${employee.salary}</p>
                <p>🗓️ ${employee.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${employee.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }


    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

// Bonus Questions

function bonus1 () {
// Get all JavaScript developers' names as a comma-separated string. 
// Steps: filter employees by primarySkill, map to names, join into string 
const dev = employees.filter(emp => emp.primarySkill === "JavaScript");
const jsNames = dev.map(emp => emp.name);
const joined = jsNames.join(", ");
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Bonus 1: JavaScript developers - ${joined}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Bonus 1</h2>
               <p>JavaScript developers: ${joined}</p>
            </div>
    `;

    for (let i = 0; i < dev.length; i++) {
        const employee = dev[i];
        console.log(employee);

        html += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>📧 ${employee.email}</p>
                <p>🏢 ${employee.department}</p>
                <p>💼 ${employee.position}</p>
                <p>🛠️ ${employee.primarySkill}</p>
                <p>💰 $${employee.salary}</p>
                <p>🗓️ ${employee.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${employee.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function bonus2 () {
// Find if every remote employee has at least 4 years of experience. 
// Steps: filter remote employees, then use every() to check experience
const remoteEmp = employees.filter(emp => emp.isRemote === true);
const fourYears = remoteEmp.every(emp => emp.yearsOfExperience >= 4);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Bonus 2: All employees have 4+ years experience? ${fourYears}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Bonus 2</h2>
               <p>Do all remote employees have 4+ years experience? ${fourYears}</p>
            </div>
    `;

    for (let i = 0; i < remoteEmp.length; i++) {
        const employee = remoteEmp[i];
        console.log(employee);

        html += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>📧 ${employee.email}</p>
                <p>🏢 ${employee.department}</p>
                <p>💼 ${employee.position}</p>
                <p>🛠️ ${employee.primarySkill}</p>
                <p>💰 $${employee.salary}</p>
                <p>🗓️ ${employee.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${employee.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function bonus3 () {
// Create an array of all unique primary skills (no duplicates). 
// Steps: map to get all primarySkill values, filter to remove duplicates 
const skills = employees.map(emp => emp.primarySkill);
const uniqueSkills = skills.filter((skill, index) => skills.indexOf(skill) === index);
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Bonus 3: Unique skills - ${uniqueSkills}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Bonus 3</h2>
               <p>Unique skills: ${uniqueSkills}</p>
            </div>
    `;

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};

function bonus4 () {
const engineEmployees = employees.filter(emp => emp.department === "Engineering");
const money = engineEmployees.map(emp => emp.salary);
let total = 0;
for(let i = 0; i < money.length; i++){
    total += money[i];
};
    const grid = document.getElementById('employeesGrid');
    const filter = document.getElementById('filterInfo');
    let html = '';
    let infoHTML = '';

    infoHTML += `
        <div><strong>Showing:</strong> Bonus 4: Engineering Total Salary - $${total}</div>
    `;

    html += `
           <div class="result-box">
               <h2>Bonus 4</h2>
               <p>$${total}</p>
               <p>Engineering department total salary</p>
            </div>
    `;

    for (let i = 0; i < engineEmployees.length; i++) {
        const employee = engineEmployees[i];
        console.log(employee);

        html += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>📧 ${employee.email}</p>
                <p>🏢 ${employee.department}</p>
                <p>💼 ${employee.position}</p>
                <p>🛠️ ${employee.primarySkill}</p>
                <p>💰 $${employee.salary}</p>
                <p>🗓️ ${employee.yearsOfExperience} years of experience</p>
                <p class="remote-box" style="color: white;">${employee.isRemote ? "🏠 Home" : "🏢 Office"}</p>
            </div>
        `;
    }

    grid.innerHTML = html;
    filter.innerHTML = infoHTML;

};