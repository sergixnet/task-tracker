import { existsSync, readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import path from 'path';

class TaskStore {
  #tasksFilePath;
  tasks = [];
  constructor() {
    if (!this.constructor.instance) {
      this.constructor.instance = this;
    }
    return this.constructor.instance;
  }

  initTasks() {
    //get user home directory
    const home = homedir();
    this.#tasksFilePath = path.join(home, 'tasks.json');

    if (!existsSync(this.#tasksFilePath)) {
      writeFileSync(this.#tasksFilePath, '[]');
    }

    this.readFromFile();
  }

  readFromFile() {
    const tasksData = readFileSync(this.#tasksFilePath);
    this.tasks = JSON.parse(tasksData);
  }

  writeToFile() {
    writeFileSync(this.#tasksFilePath, JSON.stringify(this.tasks));
  }

  addTask(task) {
    this.tasks.push(task);
    this.writeToFile();
  }

  updateTask(id, description) {
    const newTasks = this.tasks.map((task) => {
      const newtask = { ...task };
      if (newtask.id === +id) {
        newtask.description = description;
        newtask.updatedAt = new Date().toISOString();
      }
      return newtask;
    });
    this.tasks = newTasks;
    this.writeToFile();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== +id);
    this.writeToFile();
  }
  
  updateTaskStatus(id, status) {
    const newTasks = this.tasks.map((task) => {
      const newtask = { ...task };
      if (newtask.id === +id) {
        newtask.status = status;
        newtask.updatedAt = new Date().toISOString();
      }
      return newtask;
    });
    this.tasks = newTasks;
    this.writeToFile();
  }
  getTasks() {
    return this.tasks;
  }

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }
}

export default new TaskStore();
