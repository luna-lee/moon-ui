import type { App } from "vue";

// Import components
import MButton from "./button/Button.vue";

// Create component map
const components = {
  MButton,
};

// Plugin installation
export const MoonUI = {
  install(app: App) {
    // Register all components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });

    return app;
  },
};

// Export components individually
export { MButton };

// For backward compatibility
export default MoonUI;
