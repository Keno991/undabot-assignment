<template>
  <main>
    <!-- Header -->
    <header>
      <h2>Contact Us</h2>
    </header>

    <!-- Main Section -->
    <section class="flex-container">
      <form id="contactForm" class="custom-form" @submit.prevent="sendContactData">
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Email"
          @blur="resetMessages"
        />
        <textarea
          v-model="form.message"
          name="message"
          placeholder="Message"
          @keyup="adjustTextarea"
          @blur="resetMessages"
        ></textarea>
        <input class="custom-submit" type="submit" value="Submit" />
        <div v-if="errorResponseMessages.length > 0" class="error-response-messages">
          <ul>
            <li v-for="item in errorResponseMessages" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <div v-if="responseMessages" class="response-messages">
          {{ responseMessages }}
        </div>
      </form>
    </section>
  </main>
</template>

<script src="./ContactUs.js"></script>
<style scoped src="./ContactUs.css"></style>
