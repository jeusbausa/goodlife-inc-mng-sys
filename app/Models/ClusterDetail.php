<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClusterDetail extends Model
{
    protected $fillable = [
        "cluster_id",
        "client_id",
    ];

    protected function casts(): array
    {
        return [
            "birthday" => "date",
        ];
    }

    public function cluster(): BelongsTo
    {
        return $this->belongsTo(Cluster::class);
    }
}
