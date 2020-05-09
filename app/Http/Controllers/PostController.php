<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost(){
        //$posts = Post::with('user','category')->get(); //returns the posts with the users information from users table matching user ID
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts' => $posts
        ],200);
    }

    public function savePost(Request $request){
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->cat_id = $request->cat_id;
        $post->user_id = $request->user_id;
        $post->save();
    }
}
