import { createTaskId } from '../utils/index.js';


const taskFactory = (description) => {
    return {
        id: createTaskId(),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
};

export default taskFactory;