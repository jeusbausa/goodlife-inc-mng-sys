<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("transactions", function (Blueprint $table) {
            $table->id();
            $table->foreignId("cluster_detail_id")->constrained("cluster_details");
            $table->string("type");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("transactions");
    }
};
