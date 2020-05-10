import AdminHome from './components/admin/AdminHome'
//Category
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'
//Post
import PostList from './components/admin/post/list'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/Post/Edit'
//Front End
import PublicHome from './components/public/PublicHome'
import BlogPost from './components/public/blog/BlogPost'
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
    },
    //Front End Routes
    {
        path: '/',
        component: PublicHome
    },
    {
        path: '/blog',
        component: BlogPost
    }
];
