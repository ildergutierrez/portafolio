<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('restricciones', function (Blueprint $table) {
            $table->id();
            $table->integer('usuario_id')->primary(); // INT(10) UNSIGNED PRIMARY KEY
            $table->date('fecha_inicio'); // DATE
            $table->date('fecha_reactivacion'); // DATE
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restricciones');
    }
};
