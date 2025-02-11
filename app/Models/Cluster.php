<?php

namespace App\Models;

use App\Http\Enums\ClusterStatus;
use App\Http\Enums\LoanTerm;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cluster extends Model
{
    protected $fillable = [
        "staff_id",
        "branch_id",
        "cluster_code",
        "date_of_release",
        "date_of_first_payment",
        "date_of_last_payment",
        "loan_term",
        "status",
    ];

    protected $casts = [
        "status" => ClusterStatus::class,
        "loan_term" => LoanTerm::class,
        "date_of_release" => "date",
        "date_of_first_payment" => "date",
        "date_of_last_payment" => "date",
    ];

    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class);
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function members(): HasMany
    {
        return $this->hasMany(ClusterDetail::class);
    }
}
