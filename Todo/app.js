const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.innerText = taskText;

      // Toggle "done" on click
      li.addEventListener('click', () => {
        li.classList.toggle('done');
      });

      // Delete button
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.onclick = () => li.remove();
      li.appendChild(delBtn);

      taskList.appendChild(li);
      taskInput.value = '';
    }