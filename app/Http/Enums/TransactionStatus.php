<?php

namespace App\Http\Enums;

enum TransactionStatus: string
{
    case COMPLETED = "completed";
    case ACTIVE = "active";
}
