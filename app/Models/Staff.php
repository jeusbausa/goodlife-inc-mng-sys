<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $table = "staffs";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "id_no",
        "branch_id",
        "birthday",
        "first_name",
        "last_name",
        "address_line_1",
        "address_line_2",
        "code_name",
        "phone"
    ];

    protected $appends = [
        "full_name",
    ];

    protected $casts = [
        "birthday" => "date",
    ];

    protected function fullName(): Attribute
    {
        return new Attribute(fn() => "{$this->first_name} {$this->last_name}");
    }
}
