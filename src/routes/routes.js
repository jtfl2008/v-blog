import Front from '../components/front/Front.vue'
import Home from '../components/front/Home.vue'
import List from '../components/front/List.vue'
import About from '../components/front/About.vue'
import Article from '../components/front/Article.vue'

import Login from '../components/back/user/Login.vue'
import Signup from '../components/back/user/Signup.vue'

import Admin from '../components/back/Admin.vue'
import ArticleList from '../components/back/article/ArticleList.vue'
import ArticleEdit from '../components/back/article/ArticleEdit.vue'
import TagList from '../components/back/tag/TagList.vue'

import NotFound from '../components/NotFound.vue'
    // linkActiveClass: 'is-active',
export default [
    {
        path: '/',
        component: Front,
        children: [
            { path: '', redirect: 'home' },
            {
              path: 'home',
              component: Home,
              meta: {
                auth: false
              }
            },
            {
              path: 'list',
              component: List,
              meta: {
                auth: false
              }
            },
            {
              path: 'about',
              component: About,
              meta: {
                auth: false
              }
            },
            {
              path: 'article/:id',
              component: Article,
              meta: {
                auth: false
              }
            },
        ]
    },
    {
        path: '/admin',
        component: Admin,
        name: '管理面板',
        children: [
            {
              path: '',
              redirect: { name: '管理文章'}
            },
            {
              path: 'article/edit',
              name: '创建文章',
              component: ArticleEdit
            },
            {
              path: 'article/list',
              name: '管理文章',
              component: ArticleList
            },
            {
              path: 'article/edit/:id',
              name: '编辑文章',
              component: ArticleEdit
            },
            {
              path: 'tag/list',
              name: '标签管理',
              component: TagList
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup,
        meta: {
          auth: false
        }
    },
    {
        path: '*', component: NotFound
    }
]
