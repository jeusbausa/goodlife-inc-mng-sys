<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::domain(env("APP_URL"))->group(function () {

    Route::middleware(["auth", "verified"])->group(function () {
        Route::get("/", [DashboardController::class, "index"])->name("dashboard.page");
        Route::get("/branches", [BranchController::class, "index"])->name("branches.page");
    });
});
