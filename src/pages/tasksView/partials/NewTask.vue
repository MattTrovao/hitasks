<script setup>
import { onUpdated, ref } from 'vue';
import { useTasksStore } from '@/api/tasks';
import Swal from "sweetalert2";

const emit = defineEmits(["close", "refresh"]);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const tasksStore = useTasksStore();
const { createTask } = tasksStore
const name = ref('')
const check = ref(false)


const handleNewTask = async () => {
  let data = {
    task_name: name.value,
    task_completed: check.value,
  }

  let response = await createTask(data)
  if(response) {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Tarefa criada com sucesso',
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
    });
    emit("refresh")
  } else {
    Swal.fire({
      title: 'Erro!',
      text: 'Um erro ocorreu ao criar a tarefa',
      icon: "error",
      confirmButtonText: 'Tentar novamente',
    });
  }
   
}

onUpdated(() => {
  if(props.open) {
    name.value = ''
    check.value = false
  }
})
</script>

<template>
  <Modal 
    v-if="props.open" 
    :open="props.open" 
    @close="emit('close')"
    title="Criar Tarefa"
  >
    <template v-slot:content>
      <div class="flex column">
        <div class="flex column gap-0">
          <Label for="name" required>Nome da Tarefa</Label>
          <input v-model="name" id="name" class="text"/>
        </div>

        <div class="flex aling-center justify-start gap-1">
          <Checkbox :checked="check" />
          <Label for="name">Tarefa Concluída</Label>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="flex justify-between">
        <Btn type="delete" @click="emit('close')">
          <svg 
            width="25"
            height="25" 
            viewBox="0 0 384 512"
          >
            <path 
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              fill="var(--red)"  
            />
          </svg>
          Fechar
        </Btn>

        <Btn type="new" @click="handleNewTask" :disabled="name == ''">
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
          Salvar
        </Btn>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.text {
  border: 2px solid var(--blue);
  padding: .5rem;
  height: 3rem;
  box-sizing: border-box;

}
</style>