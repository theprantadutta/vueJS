<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getAllBlogPost(){
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts' => $posts
        ],200);
    }

    public function singlePost($id){
        $singlePost = Post::with('user','category')->where('id', $id)->get();
        return response()->json([
            'singlePost' => $singlePost
        ],200);
    }
}
