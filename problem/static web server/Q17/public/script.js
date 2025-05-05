fetch('/api/employees')
  .then(res => res.json())
  .then(employees => {
    const container = document.getElementById('employee-container');
    employees.forEach(emp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${emp.image}" alt="${emp.name}" />
        <h4>${emp.name}</h4>
        <p><strong>${emp.designation}</strong></p>
        <p>${emp.department}</p>
        <p>Salary: $${emp.salary}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading employee data:', err));
