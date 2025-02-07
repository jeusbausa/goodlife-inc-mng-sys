<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("clusters", function (Blueprint $table) {
            $table->id();
            $table->foreignId("staff_id")->constrained("staffs");
            $table->foreignId("branch_id")->constrained("branches");
            $table->string("cluster_code");
            $table->string("status");
            $table->date("date_of_release");
            $table->date("date_of_first_payment");
            $table->date("date_of_last_payment");
            $table->integer("loan_term");
            $table->integer("loan_cycle")->default(0);
            $table->timestamps();

            $table->fullText("cluster_code");
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("clusters");
    }
};
