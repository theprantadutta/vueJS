<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost(){
        //$posts = Post::with('user','category')->get(); //returns the posts with the users information from users table matching user ID
        $posts = Post::with('user','category')->get();
        return response()->json([
            'posts' => $posts
        ],200);
    }
}
