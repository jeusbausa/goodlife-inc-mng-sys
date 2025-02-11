<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "first_name",
        "last_name",
        "middle_name",
        "address_line_1",
        "address_line_2",
        "birthday",
        "phone"
    ];

    protected function casts(): array
    {
        return  [
            "birthday" => "date",
        ];
    }

    protected function fullName(): Attribute
    {
        return new Attribute(fn() => "{$this->first_name} {$this->last_name}");
    }
}
