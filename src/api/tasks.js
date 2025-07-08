import { defineStore } from 'pinia';
import api from 'axios';

export const useTasksStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),

  actions: {
    async getTasks() {
      try {
        const res = await api.get('http://localhost:3000/tasks');
        this.tasks = res.data;
        return res.data;
      } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
      }
    },

    async createTask(data) {
      //data: {task_name, task_completed}
      try {
        const res = await api.post('http://localhost:3000/tasks', data);
        this.tasks.push(res.data);
      } catch (err) {
        console.error('Erro ao adicionar tarefa:', err);
      }
    },
    async toggleStatus(id, data) {
      //data: {task_completed}
      try {
        const res = await api.patch(`http://localhost:3000/tasks/${id}`, data);
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) this.tasks[index] = res.data;
      } catch (err) {
        console.error('Erro ao atualizar status da tarefa:', err);
      }
    }

  },
});
