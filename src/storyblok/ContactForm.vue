<template>
  <form
    name="contact"
    action=""
    method="post"
    @submit.prevent="handleSubmit()"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="flex flex-col space-y-6"
  >
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    <div>
      <label class="mb-2 block text-lg font-bold" for="name">Name:</label>
      <input
        class="w-full rounded-lg border border-stone-200 bg-transparent py-2 px-4 transition-colors focus:border-primary focus:outline-none"
        type="text"
        name="name"
        id="name"
        v-model="formData.name"
      />
    </div>
    <div>
      <label class="mb-2 block text-lg font-bold" for="email">Email:</label>
      <input
        class="w-full rounded-lg border border-stone-200 bg-transparent py-2 px-4 transition-colors focus:border-primary focus:outline-none"
        type="email"
        name="email"
        id="email"
        v-model="formData.email"
      />
    </div>
    <div>
      <label class="mb-2 block text-lg font-bold" for="message">Message:</label>
      <textarea
        class="w-full rounded-lg border border-stone-200 bg-transparent py-2 px-4 transition-colors focus:border-primary focus:outline-none"
        name="message"
        id="message"
        rows="7"
        v-model="formData.message"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="rounded-lg bg-stone-200 py-2 px-4 font-extrabold transition-colors duration-500 hover:bg-primary hover:text-white dark:bg-stone-800"
      >
        Send message
      </button>
    </div>
    <transition name="fade">
      <p v-if="success">
        Thanks for your message!<br />
        I'll get back to you as soon as possible.
      </p>
    </transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = (event) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': event.target.getAttribute('name'),
      ...formData,
    }),
  })
    .then(() => (success.value = true))
    .catch((error) => console.log(error))
}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}
</style>
