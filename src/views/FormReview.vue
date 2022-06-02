<template>
  <div class="form-review">
    <main class="container bg-white">
      <form action="">
        <FormThree />
      </form>
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
import FormThree from '@/components/FormThree.vue'

export default {
  name: 'FormReview',
  components: {
    FormThree,
  },
}
</script>
