<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['notebook_id', 'user_id', 'title', 'content'];

    public function notebook()
    {
        return $this->belongsTo('App\Notebook');
    }

    public function tags()
    {
        return $this->hasMany('App\Tag');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
