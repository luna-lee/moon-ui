<script setup lang="ts"></script>

<template>
  <div class="container">
    <header>
      <div class="logo">
        <img src="./assets/vue.svg" alt="Vue logo" class="logo-img" />
        <h1>Moon UI 组件库展示</h1>
      </div>
      <p class="subtitle">基于 Vue 3 + TypeScript + Vite 的现代 UI 组件库</p>
    </header>

    <main>
      <section class="section">
        <h2>Button 按钮</h2>
        <div class="demo-block">
          <div class="demo-row">
            <m-button>默认按钮</m-button>
            <m-button type="primary">主要按钮</m-button>
            <m-button type="success">成功按钮</m-button>
            <m-button type="warning">警告按钮</m-button>
            <m-button type="danger">危险按钮</m-button>
            <m-button type="info">信息按钮</m-button>
          </div>

          <div class="demo-row">
            <m-button size="large">大型按钮</m-button>
            <m-button>默认大小</m-button>
            <m-button size="small">小型按钮</m-button>
          </div>

          <div class="demo-row">
            <m-button round>圆角按钮</m-button>
            <m-button disabled>禁用按钮</m-button>
            <m-button type="primary" round>主要圆角</m-button>
          </div>

          <div class="demo-row">
            <m-button block>块级按钮</m-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo-img {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo-img:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.section {
  margin-bottom: 3rem;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeaea;
}

.demo-block {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.demo-row.column {
  flex-direction: column;
}

.demo-row.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.switch-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
