<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function post(){
        return $this->hasMany(Post::class, 'id');
    }

    public function user(){
        return $this->belongsTo(User::class,'id');
    }
}
