<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function allPost(){
        //$posts = Post::with('user','category')->get(); //returns the posts with the users information from users table matching user ID
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts' => $posts
        ],200);
    }

    public function savePost(Request $request){
        $validatedData = $request->validate([
            'title' => 'required|min:2|max:50',
            'description' => 'required|min:2|max:500',
            'cat_id' => 'required|integer',
            'user_id' => 'required|integer',
            'photo' => 'required',
        ]);

        $stringPos = strpos($request->photo,';');
        $sub = substr($request->photo,0,$stringPos);
        $extension = explode('/',$sub)[1];
        $name = time().".".$extension;
        $img = Image::make($request->photo)->resize(200, 200);
        $upload_path = public_path()."/uploadImage/";
        $img->save($upload_path.$name);


        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->cat_id = $request->cat_id;
        $post->user_id = $request->user_id;
        $post->photo = $name;

        $post->save();
    }

    public function deletePost($id){
        $posts = Post::find($id);
        $imagePath = public_path()."/uploadImage/";
        $photo = $imagePath.$posts->photo;
        $posts->delete();
        if (file_exists($photo)){
            @unlink($photo);
        }
    }

    public function toEditPost($id){
        $post = Post::find($id);
        return response()->json([
            'post' => $post
        ],200);
    }

    public function updatePost(Request $request, $id){
        $validatedData = $request->validate([
            'title' => 'required|min:2|max:50',
            'description' => 'required|min:2|max:500',
            'cat_id' => 'required|integer',
            'user_id' => 'required|integer',
            'photo' => 'required',
        ]);

        $post = Post::find($id);

        $requestPhoto = $request->photo;
        $postPhoto = $post->photo;
        if ($requestPhoto != $postPhoto){
            $stringPos = strpos($requestPhoto,';');
            $sub = substr($requestPhoto,0,$stringPos);
            $extension = explode('/',$sub)[1];
            $name = time().".".$extension;
            $img = Image::make($requestPhoto)->resize(200, 200);
            $upload_path = public_path()."/uploadImage/";
            $image = $upload_path.$post->photo;
            $img->save($upload_path.$name);
            //checking if the image exists in public folder
            if (file_exists($image)){
                @unlink($image);
            }
        }
        else {
            $name = $post->photo;
        }
        $post->title = $request->title;
        $post->description = $request->description;
        $post->cat_id = $request->cat_id;
        $post->user_id = $request->user_id;
        $post->photo = $name;

        $post->save();
    }
}
