<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create("staffs", function (Blueprint $table) {
            $table->id();
            $table->string("id_no")->unique()->nullable();
            $table->foreignId("branch_id")->constrained("branches");
            $table->string("first_name");
            $table->string("last_name");
            $table->string("code_name");
            $table->date("birthday")->nullable();
            $table->string("phone")->nullable();
            $table->string("address_line_1")->nullable();
            $table->string("address_line_2")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("staffs");
    }
};
