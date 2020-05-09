import AdminHome from './components/admin/AdminHome'
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'
//Post
import PostList from './components/admin/post/list'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/Post/Edit'
export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/category-list',
        component: CategoryList
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path: '/edit-category/:categoryId',
        component: EditCategory
    },
    //Post
    {
        path: '/post-list',
        component: PostList
    },
    {
        path: '/add-post',
        component: AddPost
    },
    {
        path: '/edit-post/:postId',
        component: EditPost
    }
];
