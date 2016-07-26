<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notebook extends Model
{
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['user_id', 'name'];

    public function notes()
    {
        return $this->hasMany('App\Note');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
