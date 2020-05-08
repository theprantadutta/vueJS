<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request){
        $validatedData = $request->validate([
            'cat_name' => 'required|min:2|max:20',
        ]);
        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message'=>'ok'];
    }

    public function allCategory(){
        $categories = Category::all();
        return response()->json([
            'AllCategories'=>$categories
        ],200);
    }

    public function deleteCategory($id){
        $category = Category::find($id);
        $category->delete();
    }
}
