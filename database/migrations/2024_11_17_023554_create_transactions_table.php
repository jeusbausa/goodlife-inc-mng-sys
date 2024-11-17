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
            $table->foreignId("client_id")->constrained("clients");
            $table->string("transaction_number")->unique();
            $table->string("settlement_type");
            $table->string("type");
            $table->string("status");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("transactions");
    }
};
