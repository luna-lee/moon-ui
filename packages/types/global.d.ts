import type { DefineComponent } from 'vue';
import type { MButton } from './index';

// 全局组件类型声明
declare  module 'vue' {
  export interface GlobalComponents {
    MButton: typeof MButton
  }
}
export {};