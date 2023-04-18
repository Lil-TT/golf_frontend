import { globalStore, userStore } from "../../store/index";

export const storeBindings = {
  storeBindings: [{
    store: globalStore,
    fields: ["numA", "numB", "sum"],
    actions: ["update"],
  }, {
    store: userStore,
    fields: {
      userInfo: (store: any) => store.userInfo,
      count: (store: any) => store.count
    },
    actions: [],
  }]
};
