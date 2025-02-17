<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $fillable = [
        'name',	'ccy',	'desc',	'exchange',	'main',	'published'
    ];

    public $timestamps = false;
}
