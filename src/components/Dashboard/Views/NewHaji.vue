<template>
  <div class="card">
    <div class="header">
      <h4 class="title">New Haji</h4>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
            <pulse-loader :loading="loading" :color="color"></pulse-loader>
        </div>
        </div>
      <form v-if="!loading">
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="First Name"
                      placeholder="Haji first name"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-4">

            <fg-input type="text"
                      label="Last Name"
                      placeholder="Haji ast name"
                      v-model="user.lastName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Passport Number"
                      placeholder="Passport Number"
                      v-model="user.passportNumber">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Password"
                      placeholder="Password"
                      v-model="user.password">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Address"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Mobile Number"
                      placeholder="Haji Mobile"
                      v-model="user.mobilenumber">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="number"
                      label="Balance"
                      placeholder="Amount to add"
                      v-model="user.balance">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="addHaji()">
            Register Haji
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import HajiService from '../../../services/Users'
  import PulseLoader from '../../../../node_modules/vue-spinner/src/PulseLoader.vue'

  export default {
    components: {
      PulseLoader
    },
    data () {
      return {
        user: {
          firstName: 'Haji',
          lastName: 'Arslan',
          passportNumber: '12345678912',
          password: 'ab891Cs#',
          country: 'Australia',
          city: 'Melbourne',
          address: '23 Street 7 Georgia',
          mobilenumber: '00515740156',
          balance: '25'
        },
        loading: false,
        color: 'green'
      }
    },
    methods: {
      async addNewHaji (formData) {
        this.loading = true
        let res = await HajiService.newHaji(formData)
        this.loading = false
        console.log(res.data)
        if (res.data === 'Success') {
          this.$router.push('users')
        }
      },
      addHaji () {
        var formData = new FormData()
        formData.append('first_name', this.user.firstName)
        formData.append('last_name', this.user.lastName)
        formData.append('password', this.user.password)
        formData.append('passport_number', this.user.passportNumber)
        formData.append('status', true)
        formData.append('country', this.user.country)
        formData.append('city', this.user.city)
        formData.append('address', this.user.address)
        formData.append('mobile', this.user.mobilenumber)
        formData.append('amount', this.user.balance)
        this.addNewHaji(formData)
      }
    }
  }

</script>
<style>

</style>
