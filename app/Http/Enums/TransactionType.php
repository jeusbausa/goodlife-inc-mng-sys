<?php

namespace App\Http\Enums;

enum TransactionType: string
{
    case DEPOSIT = "deposit";
    case WITHDRAWAL = "withdrawal";
}
