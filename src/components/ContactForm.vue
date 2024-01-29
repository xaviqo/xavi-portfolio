<template>
  <div id="contact">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-bold text-center sm:text-xl">
        <span v-if="sent" class="text-green-800">
          Thank you for sending your message, I will get back to you as soon as possible!
        </span>
        <span v-else class="text-gray-700">
          If you want to contact me for any question, you can use this form or contact me through
          <a href="https://www.linkedin.com/in/xaviqo/" target="_blank" class="underline">Linkedin</a> or <a href="https://github.com/xaviqo" target="_blank" class="underline">GitHub</a>. Thank you very much!
        </span>
      </p>
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
    sent: false,
    url: 'https://api-mailer.xavi.tech',
    token: null,
    tokenEp: '/api/get_token',
    sendEp: '/api/send',
    msg: {
      sender: '',
      msg: '',
      token: null
    }
  }),
  methods: {
    prepare(){
      fetch(this.url+this.tokenEp, { method: 'GET', headers: {'Content-Type': 'application/json'}})
          .then( res => {
            if (res.ok) return res.json()
          })
          .then( data => this.send(data.token) )
          .catch(error => console.error('Error fetching token:', error));

    },
    send(token){
      this.msg.token = token;
      fetch(this.url+this.sendEp, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.msg)
      })
      .then( (res) => {
        this.msg = {
          sender: '',
          msg: '',
          token: null
        };
        this.sent = true;
      })
      .catch(error => console.error('Error sending mail:', error));
    }
  }
}
</script>
<style scoped>

</style>