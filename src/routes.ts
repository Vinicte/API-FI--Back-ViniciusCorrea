import { UserVacController } from "./controller/UserVacController";
import { SystemVacController } from "./controller/UserVacController";

export const Routes = [
    {
      method: "get",
      route: "/SystemVac",
      controller: SystemVacController,
      action: "all",
    },
    {
      method: "get",
      route: "/SystemVac/:id",
      controller: SystemVacController,
      action: "one",
    },
    {
      method: "post",
      route: "/SystemVac",
      controller: SystemVacController,
      action: "save",
    },
    {
      method: "put",
      route: "/SystemVac/:id",
      controller: SystemVacController,
      action: "update",
    },
  
    {
      method: "delete",
      route: "/SystemVac/:produto",
      controller: SystemVacController,
      action: "remove",
    },

    

  {
    method: "get",
    route: "/UserVac",
    controller: UserVacController,
    action: "all",
  },
  {
    method: "get",
    route: "/UserVac/:cod",
    controller: UserVacController,
    action: "one",
  },
  {
    method: "put",
    route: "/UserVac/:cod",
    controller: UserVacController,
    action: "update",
  },
  {
    method: "post",
    route: "/UserVac",
    controller: UserVacController,
    action: "save",
  },
  {
    method: "delete",
    route: "/UserVac/:usuario",
    controller: UserVacController,
    action: "remove",
  },
];