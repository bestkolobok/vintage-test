<template>
  <article class="feedback">
      <v-layout class="feedback__body" wrap>
          <v-flex
                  class="feedback__left-column feedback__column"
                  :class="{'feedback__column--column': $vuetify.breakpoint.mdAndDown}"
                  xs12 md6
          >
              <h2 class="feedback__title">
                  Contact Us
              </h2>
              <section class="feedback__main">
                  <v-form
                          class="feedback__form"
                          ref="form"
                          v-model="valid"
                          lazy-validation
                  >
                      <v-text-field
                              class="feedback__input"
                              label="Name"
                              :rules="nameRules"
                              required
                              v-model="name"
                      ></v-text-field>
                      <v-text-field
                              class="feedback__input"
                              label="Phone"
                              mask="+## ## ### ## ##"
                              v-model="phone"
                      ></v-text-field>
                      <v-text-field
                              class="feedback__input"
                              label="E-mail"
                              :rules="emailRules"
                              required
                              v-model="email"
                      ></v-text-field>
                      <v-layout justify-start class="feedback__checkbox-field">
                          <div>
                              <v-checkbox
                                      v-model="checkbox"
                                      color="white"
                                      dark
                              ></v-checkbox>
                          </div>
                          <span class="feedback__checkbox-label">I agree the processing of personal data</span>
                      </v-layout>
                      <v-btn
                              class="feedback__button"
                              depressed
                              dark
                              color="button"
                              :disabled="buttonDisabled"
                              @click="send"
                      >Get in touch</v-btn>
                  </v-form>
              </section>
          </v-flex>
          <v-flex
                  class="feedback__right-column feedback__column"
                  :class="{'feedback__column--column feedback__right-column--column': $vuetify.breakpoint.mdAndDown}"
                  xs12 sm6
          >
              <section>
                  Please tell us more about your request and give us info about your company and country
              </section>
          </v-flex>
      </v-layout>
  </article>
</template>

<script>
  export default {
      name: 'Feedback',
      data: function () {
          return {
              valid: false,
              checkbox: false,
              nameRules: [
                  v => !!v || 'Name is required',
                  v => (v && v.length <= 15) || 'Name must be less than 15 characters'
              ],
              emailRules: [
                  v => !!v || 'E-mail is required',
                  v => /.+@.+/.test(v) || 'E-mail must be valid'
              ],
              name: '',
              phone: '',
              email: '',
          }
      },
      methods: {
          send(){
              if (this.$refs.form.validate()) {
                  this.valid = true
                  const payloadData = new FormData();
                  payloadData.append('name', this.name);
                  payloadData.append('phone', this.phone);
                  payloadData.append('email', this.email);
                  this.sendMessage(payloadData)
              }
          },
          async sendMessage (payload) {
              try {
                  await this.axios.post('http://httpbin.org/post', payload);
                  console.log('SEND!!!')
              } catch (err) {
                  throw err
              }
          },
      },
      computed: {
          buttonDisabled(){
              return !(this.valid && this.checkbox)
          }
      }
  }
</script>

<style scoped lang="scss">
    .feedback{
        padding: 70px 0;
        min-height: 400px;
        background-image: url(~@/assets/img/pattern.png);
        background-size: 100% 100%;
        &__column{
            padding: 0 50px;
            &--column{
                padding: 0 25px;
                margin-bottom: 20px;
            }
        }
        &__right-column{
            padding-top: 50px;
            &--column{
                padding-top: 26px;
            }
        }
        &__title{
            font-weight: normal;
            color: white;
            margin-bottom: 30px;
        }
        &__checkbox-label{
            color: white;
        }
        &__button{
            margin-left: 0;
            font-size: 10px;
            width: 200px;
            height: 60px;
        }
    }
</style>
