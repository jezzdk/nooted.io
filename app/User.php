<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function notebooks()
    {
        return $this->hasMany('App\Notebook');
    }

    public function notes()
    {
        return $this->hasMany('App\Note');
    }

    public function tags()
    {
        return $this->hasMany('App\Tag');
    }

    public function attachments()
    {
        return $this->hasMany('App\Attachment');
    }
}
