<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import ComponentIcon from './icons/IconComponent.vue'
import VisualDevelopmentIcon from './icons/IconVisualDevelopment.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>文档</template>

    快捷开发的
    <a href="https://vuejs.org/" target="_blank" rel="noopener">文档</a>
    为您提供了快速开始所需的所有信息。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>工具</template>

    <a href="https://github.com/vsdeeper/vswift" target="_blank" rel="noopener">vswift</a>
    是实现快捷开发的核心工具，它提供了将可视化配置数据生成代码的脚手架能力。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ComponentIcon />
    </template>
    <template #heading>组件</template>

    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">vswift-components</a>
    是快捷开发的常用组件，也是可视化配置的重要搭档和生成代码的重要组成部分， 点击
    <a href="https://vsdeeper.github.io/vswift-components" target="_blank" rel="noopener"> 这里 </a>
    预览。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <VisualDevelopmentIcon />
    </template>
    <template #heading>可视化</template>

    <a href="https://github.com/vsdeeper/visual-development" target="_blank" rel="noopener">
      visual-development
    </a>
    是快捷开发的可视化配置平台，通过配置生成JSON数据，下载到本地，配合 vswift 命令将数据转化为代码，
    点击<a href="https://vsdeeper.github.io/visual-development" target="_blank" rel="noopener">
      这里
    </a>
    开始。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>赞助我</template>

    作为一个独立开源项目，作者倾注了大量时间和精力。您可以成为
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"> 赞助商 </a>
    来帮助作者。
  </WelcomeItem>
</template>
