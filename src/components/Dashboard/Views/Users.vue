<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <div class="row">
              <div class="col-md-10">
                <h4 class="title">{{table1.title}}</h4>
                <p class="category">{{table1.subTitle}}</p>
              </div>
              <div class="col-md-2">
                <router-link to='newhaji'>Register new Haji</router-link>
              </div>
            </div>
            
            
          </div>
          <div class="content table-responsive table-full-width">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
                  <pulse-loader :loading="loading" :color="color"></pulse-loader>
                </div>
              </div>
            <table class="table Striped" v-if="!loading && table1.data.length > 0">
              <thead>
                <th v-for="column in table1.columns">{{column}}</th>
              </thead>
              <tbody>
                <tr v-for="item in table1.data">
                  <td v-for="column in table1.columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import UserService from '../../../services/Users'
  import PulseLoader from '../../../../node_modules/vue-spinner/src/PulseLoader.vue'

  export default {
    components: {
      PaperTable, PulseLoader
    },
    created () {
      this.getUsers()
    },
    methods: {
      async getUsers () {
        this.loading = true
        let users = await UserService.getUsers()
        this.table1.data = users.data
        console.log(this.tableData)
        this.loading = false
        this.$forceUpdate()
      },
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    },
    data () {
      return {
        table1: {
          title: 'Hajis',
          subTitle: 'using Sahl Pay',
          columns: ['First_Name', 'Last_Name', 'Amount', 'Country', 'City'],
          data: []
        },
        loading: false,
        color: 'green'
      }
    }
  }

</script>
<style>
</style>
