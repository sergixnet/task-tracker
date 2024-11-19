import TaskStore from '../libs/task-store.mjs';


/**
 * Generates a new unique task ID.
 *
 * This function retrieves the current list of tasks from the TaskStore,
 * and calculates the next task ID by incrementing the ID of the last task in the list.
 * If there are no tasks, it returns 1 as the initial task ID.
 *
 * @returns {number} The new unique task ID.
 */
function createTaskId() {

    const taskStore = TaskStore;
    taskStore.getTasks();

    let id = 1;

    if (taskStore.tasks.length > 0) {
        id = taskStore.tasks[taskStore.tasks.length - 1].id + 1;
    }

    return id;
}


function printTasks(tasks) {
    console.log('Tasks:');

    if (tasks.length === 0) {
        console.log('No tasks found');
        return;
    }
    
    tasks.forEach((task) => {
        console.log(`- ${task.id}: ${task.description} (${task.status})`);
    });
}

export {
    createTaskId,
    printTasks
}
