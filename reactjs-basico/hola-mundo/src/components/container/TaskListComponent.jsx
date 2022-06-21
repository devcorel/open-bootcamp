import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';
// import PropTypes from 'prop-types'

import '../../styles/task.scss';

const TaskListComponent = (props) => {
   const defaultTask = new Task(
      'Example',
      'Example description',
      false,
      LEVELS.NORMAL
   );

   const changeState = (id) => {
      console.log('Todo: Cambiar estado de una tarea.');
   };

   return (
      <div>
         <h1>Tus tareas:</h1>
         <TaskComponent task={defaultTask} />
      </div>
   );
};

// TaskList.propTypes = {}

export default TaskListComponent;
