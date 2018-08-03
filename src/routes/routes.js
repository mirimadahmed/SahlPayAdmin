import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import UsersList from 'src/components/Dashboard/Views/Users.vue'
import MerchantsList from 'src/components/Dashboard/Views/Merchants.vue'
import Reports from 'src/components/Dashboard/Views/Reports.vue'
import NewHaji from 'src/components/Dashboard/Views/NewHaji.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/reports'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/reports',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      },
      {
        path: 'reports',
        name: 'reports',
        component: Reports
      },
      {
        path: 'users',
        name: 'users',
        component: UsersList
      },
      {
        path: 'merchants',
        name: 'merchants',
        component: MerchantsList
      },
      {
        path: 'newhaji',
        name: 'Add new',
        component: NewHaji
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
