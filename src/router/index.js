import { createRouter, createWebHistory } from "vue-router";
import UsersAccounts from "../components/UsersAccounts";
import UserAccount from "../components/UserAccount";

const routes = [
  {
    path: "/accounts",
    name: "UsersAccounts",
    component: UsersAccounts,
  },
  {
    path: "/accounts/:id",
    name: "userAccount",
    component: UserAccount,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
