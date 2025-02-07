<?php

namespace App\Http\Enums;

enum ClusterStatus: string
{
    case ACTIVE = "active";
    case CLUSTERED_RESOLUTION = "clustered_resolution";
    case DEAD_ACCOUNT = "dead_account";
    case NEW = "new";
}
