<script setup>
import { onMounted, ref } from 'vue';
import Card from './partials/Card.vue';
import { useTasksStore } from '@/api/tasks';
import NewTask from './partials/NewTask.vue';

const tasksStore = useTasksStore();

const { getTasks } = tasksStore

const tasks = ref([])

const newModal = ref(false)
const loading = ref(true)

const handleUpdateTaskList = () => {
  newModal.value = true
}

const initFunction = async () => {
  loading.value = true

  let data = await getTasks();  
  if(data){
    tasks.value = data
  }

  setTimeout(() => {
    loading.value = false
  }, 1500);    

}

onMounted(() => {
  initFunction()
})
</script>

<template>
  <Title>
    Tarefas
  </Title>

  <Loading v-if="loading" />

  <template v-else>
    <div class="flex justify-end mb-2">
      <Btn type="new" @click="newModal = true">
        <svg
          width="25"
          height="25"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33325 7.33594V3.33594H8.66659V7.33594H12.6666V8.66927H8.66659V12.6693H7.33325V8.66927H3.33325V7.33594H7.33325Z"
            fill="var(--green)"
          />
        </svg>
      </Btn>
    </div>

    <div class="list">
      <template v-for="task in tasks" :key="task.task_id">
        <Card 
          :completed="task.task_completed" 
          :id="task.task_id"
          :title="task.task_name"
          @refresh="initFunction"
        />
      </template>
    </div>
  </template>

  <NewTask 
    :open="newModal"
    @refresh="initFunction"
    @close="newModal = false"
  />
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
</style>
