<template>
  <section class="contact" id="contact">
    <h2 class="contact__title">Talk To Us About Your Project</h2>
    <p class="contact__subtitle">We will never send spam or add you to a mailing list</p>
    <section class="container">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name"></label>
          <input type="text" id="name" v-model="name" placeholder="Enter your Name" required />
        </div>

        <div>
          <label for="email"></label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email Adress"
            required
          />
        </div>

        <div>
          <label for="message"></label>
          <textarea id="message" v-model="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" class="contact__button button">Submit</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: 'TheContact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    handleSubmit() {
      alert(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`)
    },
  },
}
</script>

<style lang="scss" scoped>
// .contact-wrapper {
//   background: red;
//   width: 100%;
// }

.contact {
  flex-direction: column;
  width: 100%;
  display: flex;
  padding: 50px 0;
  background: #3d948c;

  &__title,
  &__subtitle {
    margin: 20px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
  &__subtitle {
    margin: 0 0 40px;
    font-size: 20px;
  }

  &__button {
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}

.container {
  flex: 0 0;
  width: 50%;
  padding: 0;

  @media (max-width: 960px) {
    width: 80%;
  }
}

input,
textarea {
  width: 100%;
  padding: 15px 20px;

  border-radius: 5px;
  border: none;
  margin: 10px 0;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: #41a297;
  color: #ffffff;
  border-radius: 27.5px;
  width: 100%;
  font-size: 16px;

  &:focus {
    border-color: #3d948c;
    box-shadow: 0 0 5px rgba(61, 148, 140, 0.5);
    outline: none;
  }
}
input::placeholder,
textarea::placeholder {
  color: #ffffff;
}
textarea {
  // resize: vertical;
  min-height: 180px;
  font-size: 16px;
}
#name,
#email,
#message {
  font-size: 16px;
  font-weight: 300;
  font-family: 'MuseoSans';
}
#message {
  margin: 10px 0 40px;
}
</style>
