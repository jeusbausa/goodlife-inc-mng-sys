<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware("auth")->group(function () {


    Route::prefix("admin")->middleware(["auth", "verified"])->group(function () {

        Route::prefix("branches")->group(function () {
            Route::get("/get", [BranchController::class, "index"])->name("branches.get");
        });

        Route::prefix("profile", function () {
            Route::get("/", [ProfileController::class, "edit"])->name("profile.edit");
            Route::patch("/", [ProfileController::class, "update"])->name("profile.update");
            Route::delete("/", [ProfileController::class, "destroy"])->name("profile.destroy");
        });
    });
});


require __DIR__ . "/auth.php";
require __DIR__ . "/pages.php";
