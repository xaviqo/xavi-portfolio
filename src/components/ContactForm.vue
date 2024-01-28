<template>
  <div>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-bold text-center text-gray-700 sm:text-xl">If you want to contact me for any question, you can use this form or contact me through
        <a href="https://www.linkedin.com/in/xaviqo/" target="_blank" class="underline">Linkedin</a> or <a href="https://github.com/xaviqo" target="_blank" class="underline">GitHub</a>. Thank you very much!</p>
      <form action="#" class="space-y-8">
        <div>
          <label for="email" class="block mb-2">Your email</label>
          <input
              type="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="your@email.com"
              v-model="msg.sender"
              required
          >
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2">Your message</label>
          <textarea
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:border-gray-600"
              placeholder="Thank you for contacting me... :)"
              required
              v-model="msg.msg"
          ></textarea>
        </div>
        <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-gray-400 hover:bg-primary-800 focus:ring-4 focus:outline-none"
            @click.prevent="prepare()"
        >Send message</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactForm',
  data: () => ({
    token: null,
    tokenEp: 'https://api-mailer.xavi.tech/api/get_token',
    sendEp: 'https://api-mailer.xavi.tech/api/send',
    msg: {
      sender: '',
      msg: '',
      token: null
    }
  }),
  methods: {
    prepare(){
      fetch(this.tokenEp, { method: 'GET'})
          .then( res => this.send(res.data.token) )
    },
    send(token){
      console.log(token)
      this.msg.token = token;
      fetch(this.sendEp, {
        method: 'POST',
        body: JSON.stringify(this.msg)
      })
      .then( res => console.log(res.data))
    }
  }
}
</script>
<style scoped>

</style>