<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'slug', 'thumb', 'image', 'parent_id'
    ];

    public $timestamps = false;

    public function parent()
    {
        return $this->belongsTo('App\Category', 'parent_id');
    }

    public function hasChildrens(){
        return true;
    }

    public function children()
    {
        return $this->hasMany('App\Category', 'parent_id');
    }

    public static function boot() {
        parent::boot();

        static::deleting(function($category) { // before delete() method call this
             $category->children()->delete();
        });
    }
}
