<?php

namespace App\Providers;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Collection::macro("keyToCamel", function () {
            return convertDimensionKeyToCamel($this->toArray());
        });

        Collection::macro("keyToSnake", function () {
            return convertDimensionKeyToSnake($this->toArray());
        });

        Vite::prefetch(concurrency: 3);
    }
}