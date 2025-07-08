import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/components/layout/Page.vue"),
      children: [
        {
          path: "",
          name: "Sobre",
          component: () => import("@/pages/aboutView/about.vue"),
          meta: { title: "Sobre" },
        },
        {
          path: "tasks",
          name: "Tarefas",
          component: () => import("@/pages/tasksView/tasks.vue"),
          meta: { title: "Tarefas" },
        },
        
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
