<script setup>
import { useTasksStore } from '@/api/tasks';
import Swal from "sweetalert2";
import { onMounted, ref } from 'vue';

const emit = defineEmits(["refresh"]);
const props = defineProps({
  completed: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const tasksStore = useTasksStore();
const { toggleStatus } = tasksStore
const isCompleted = ref(props.completed)

const handleToogleTask = async () => {
  let data = {
    task_completed: !isCompleted.value
  }

  let response = await toggleStatus(props.id,data)
  
  if(response) {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Tarefa atualizada com sucesso',
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
    });
    emit("refresh")
  } else {
    Swal.fire({
      title: 'Erro!',
      text: 'Um erro ocorreu ao atualizar a tarefa',
      icon: "error",
      confirmButtonText: 'Tentar novamente',
    });
  }
}
</script>

<template>
  <div :class="['card', { '--completed': isCompleted }]">
    <Checkbox :checked="isCompleted" @click="handleToogleTask" />

    <div class="__title">
      <h2>
        {{ props.title }}
      </h2>
    </div>


    <Btn type="delete" class="__delete">
      <svg
        width="15"
        height="15"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM7 9H9V15H7V9ZM11 9H13V15H11V9ZM7 2V4H13V2H7Z"
          fill="var(--red)"
        />
      </svg>
    </Btn>
  </div>
</template>

<style>
.card{ 
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem  2rem;
  width: auto;
  border: 2px solid var(--gray);
  border-radius: 16px;
  overflow: hidden;

  &.--completed {
    border-color: var(--green);
    &::before{
      background: var(--green);
    }
  }

  &:before{
    content: '';
    width: 1rem;
    height: 100%;
    display: block;
    background: var(--gray);
    position: absolute;
    left: 0;
    top: 0;
  }

  .__title {
    width: 65%;
    h2{
      font-size: 1.4rem;
      font-weight: 200;
      margin: 0;
    }
  }

  .__delete {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>