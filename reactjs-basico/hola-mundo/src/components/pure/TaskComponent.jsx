import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss';

const TaskComponent = ({ task }) => {
   return (
      <div>
         <h2 className="task-name">Nombre: {task.name}</h2>
         <h3>Descripción: {task.description}</h3>
         <h4>Level: {task.level}</h4>
         <h5>Estado: {task.completed ? 'Completado' : 'Pendiente'}</h5>
      </div>
   );
};

TaskComponent.propTypes = {
   task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
