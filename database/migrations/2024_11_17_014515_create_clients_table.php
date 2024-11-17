<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("clients", function (Blueprint $table) {
            $table->id();
            $table->string("first_name");
            $table->string("last_name");
            $table->string("address_line_1")->nullable();
            $table->string("address_line_2")->nullable();
            $table->date("birthday")->nullable();
            $table->integer("loan_cycle")->default(0);
            $table->string("phone")->nullable();
            $table->timestamps();

            $table->fullText(["first_name", "last_name"]);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("clients");
    }
};
