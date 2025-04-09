<template>
  <button
    class="m-button"
    :class="[
      `m-button--${type}`,
      { 'm-button--round': round },
      { 'm-button--disabled': disabled },
      { 'm-button--block': block },
      size ? `m-button--${size}` : '',
    ]"
    :disabled="disabled"
    :type="nativeType"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export type ButtonSize = 'large' | 'default' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export default defineComponent({
  name: 'MButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String as PropType<NativeType>,
      default: 'button'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) return
      emit('click', e)
    }

    return {
      handleClick
    }
  }
})
</script>

<style>
.m-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
}

.m-button:hover,
.m-button:focus {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.m-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

.m-button--primary {
  color: #ffffff;
  background-color: #409eff;
  border-color: #409eff;
}

.m-button--primary:hover,
.m-button--primary:focus {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #ffffff;
}

.m-button--primary:active {
  background-color: #3a8ee6;
  border-color: #3a8ee6;
  color: #ffffff;
}

.m-button--success {
  color: #ffffff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.m-button--success:hover,
.m-button--success:focus {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #ffffff;
}

.m-button--success:active {
  background-color: #5daf34;
  border-color: #5daf34;
  color: #ffffff;
}

.m-button--warning {
  color: #ffffff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.m-button--warning:hover,
.m-button--warning:focus {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #ffffff;
}

.m-button--warning:active {
  background-color: #cf9236;
  border-color: #cf9236;
  color: #ffffff;
}

.m-button--danger {
  color: #ffffff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.m-button--danger:hover,
.m-button--danger:focus {
  background-color: #f78989;
  border-color: #f78989;
  color: #ffffff;
}

.m-button--danger:active {
  background-color: #dd6161;
  border-color: #dd6161;
  color: #ffffff;
}

.m-button--info {
  color: #ffffff;
  background-color: #909399;
  border-color: #909399;
}

.m-button--info:hover,
.m-button--info:focus {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  color: #ffffff;
}

.m-button--info:active {
  background-color: #82848a;
  border-color: #82848a;
  color: #ffffff;
}

.m-button--large {
  height: 40px;
  padding: 12px 19px;
  font-size: 16px;
  border-radius: 4px;
}

.m-button--small {
  height: 24px;
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
}

.m-button--round {
  border-radius: 20px;
}

.m-button--block {
  display: block;
  width: 100%;
}

.m-button--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.m-button--disabled:hover,
.m-button--disabled:focus,
.m-button--disabled:active {
  color: #606266;
  border-color: #dcdfe6;
  background-color: #ffffff;
}

.m-button--disabled.m-button--primary,
.m-button--disabled.m-button--success,
.m-button--disabled.m-button--warning,
.m-button--disabled.m-button--danger,
.m-button--disabled.m-button--info {
  color: #ffffff;
}
</style> 