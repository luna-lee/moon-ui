import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 导入全局样式
import "moon-ui/style.css";

// 从源码中直接导入组件
import { MButton } from "moon-ui";

const app = createApp(App);

// 全局注册组件
app.component("MButton", MButton);

app.mount("#app");
