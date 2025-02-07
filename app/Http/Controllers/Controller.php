<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

abstract class Controller
{
    public function inertiaRenderPage(string $component, ?array $props = []): Response
    {
        return Inertia::render($component, convertDimensionKeyToCamel($props));
    }
}
