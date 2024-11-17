<?php

namespace App\Http\Enums;

enum UserStatus: string
{
    case ACTIVE = "active";
    case DISABLED = "disabled";
    case PENDING = "pending";
}
