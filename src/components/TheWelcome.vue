<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import FormIcon from './icons/IconForm.vue'
import VisualDevelopmentIcon from './icons/IconVisualDevelopment.vue'
import SupportIcon from './icons/IconSupport.vue'
import { getLangData } from './util'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ getLangData('document.title') }}</template>
    <div v-html="getLangData('document.content')"></div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ getLangData('tool.title') }}</template>
    <div v-html="getLangData('tool.content')"></div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FormIcon />
    </template>
    <template #heading>{{ getLangData('form.title') }}</template>
    <div v-html="getLangData('form.content')"></div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <VisualDevelopmentIcon />
    </template>
    <template #heading>{{ getLangData('visual.title') }}</template>
    <div v-html="getLangData('visual.content')"></div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ getLangData('sponsor.title') }}</template>
    <div v-html="getLangData('sponsor.content')"></div>
  </WelcomeItem>
</template>
