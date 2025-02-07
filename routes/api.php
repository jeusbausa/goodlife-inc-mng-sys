<?php

use App\Http\Controllers\InertiaController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClusterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StaffController;
use Illuminate\Support\Facades\Route;

Route::prefix("api")->name("api.")->middleware(["auth", "verified"])->group(function () {
    Route::apiResource("branches", BranchController::class)->except(["create"]);
    Route::apiResource("clients", ClientController::class);
    Route::apiResource("staffs", StaffController::class);
    Route::apiResource("clusters", ClusterController::class);
    Route::apiResource("profile", ProfileController::class);
});
