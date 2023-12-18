import { MenuDataItem } from "@ant-design/pro-layout";

const routerConfig = {
  router: [
    {
      path: "/",
      name: "Trang chủ",
    },
    {
      path: "/todo-list",
      name: "Danh sách công việc",
      // routes: [
      //   {
      //     path: "/todo-list/list",
      //     name: "Tất cả công việc",
      //   },
      //   {
      //     path: "/todo-list/unfinished-list",
      //     name: "Công việc chưa hoàn thành",
      //   },
      //   {
      //     path: "/todo-list/finished-list",
      //     name: "Công việc đã hoàn thành",
      //   },
      // ],
    },
  ],
  location: { pathname: "/" },
};

const menuDataRender = (menuData: MenuDataItem[]): MenuDataItem[] => {
  return menuData.concat(routerConfig.router);
};

export default menuDataRender;
