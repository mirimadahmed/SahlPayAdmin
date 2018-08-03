import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Reports',
      icon: 'ti-stats-up',
      path: '/admin/reports'
    },
    {
      name: 'Users',
      icon: 'ti-user',
      path: '/admin/users'
    },
    {
      name: 'Merchants',
      icon: 'ti-shopping-cart',
      path: '/admin/merchants'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
