<template>
  <div class="form-secondary">
    <main class="container bg-white">
      <form action="">
        <FormTwo />
      </form>
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
import FormTwo from '@/components/FormTwo.vue'

export default {
  name: 'FormSecondary',
  components: {
    FormTwo,
  },
}
</script>
