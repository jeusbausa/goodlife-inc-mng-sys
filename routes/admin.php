<?php

use App\Http\Controllers\InertiaController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClusterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StaffController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->name("admin.")->middleware(["auth", "verified"])->group(function () {
    Route::get("dashboard", [InertiaController::class, "dashboard"])->name("dashboard.page");
    Route::get("branches", [InertiaController::class, "branches"])->name("branches.page");
    Route::get("clients", [InertiaController::class, "clients"])->name("clients.page");
    Route::get("staffs", [InertiaController::class, "staffs"])->name("staffs.page");

    Route::prefix("clusters")->group(function () {
        Route::get("/", [InertiaController::class, "clusters"])->name("clusters.page");
        Route::get("{cluster}", [InertiaController::class, "cluster"])->name("cluster.page");
    });
});
