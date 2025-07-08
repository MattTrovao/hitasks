import api from 'axios';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),

  actions: {
    async getTasks() {
      try {
        const res = await api.get('/tasks');
        this.tasks = res.data;
        return this.tasks;
      } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
      }
    },

    async createTask(data) {
      //data: {task_name, task_completed}
      try {
        const res = await api.post('/tasks', data);
        this.tasks.push(res.data);
        return this.tasks;

      } catch (err) {
        console.error('Erro ao adicionar tarefa:', err);
      }
    },
    async toggleStatus(id, data) {
      //data: {task_completed}
      try {
        const res = await api.patch(`/tasks/${id}`, data);
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) this.tasks[index] = res.data;
        return this.tasks;
      } catch (err) {
        console.error('Erro ao atualizar status da tarefa:', err);
      }
    },
    async deleteTask(id) {
      try {
        const res = await api.delete(`/tasks/${id}`);
        this.tasks = this.tasks.filter(t => t.id !== id);
        return this.tasks;
      } catch (err) {
        console.error('Erro ao atualizar status da tarefa:', err);
      }
    },
  },
});
