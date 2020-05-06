<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post(){
        //$posts = Post::with('user','category')->get(); //returns the posts with the users information from users table matching user ID
        $category = Category::with('posts')->get();
        return $category;
    }
}
