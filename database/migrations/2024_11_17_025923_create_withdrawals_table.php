<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("withdrawals", function (Blueprint $table) {
            $table->id();
            $table->foreignId("transaction_id")->constrained("transactions");
            $table->decimal("loan_amount", 15);
            $table->decimal("loan_receivable_amount", 15);
            $table->decimal("share_capital_cumulative_amount", 15);
            $table->decimal("weekly_installment_amount", 15);
            $table->decimal("penalty_amount", 15);
            $table->decimal("withdrawal_amount", 15);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("withdrawals");
    }
};
