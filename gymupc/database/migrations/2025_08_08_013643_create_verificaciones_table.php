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
        Schema::create('verificaciones', function (Blueprint $table) {
             $table->increments('id'); // INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY
             $table->string('correo', 100); // VARCHAR(100)
             $table->integer('usuario_id',8)->unsigned(); // INT(8) UNSIGNED
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verificaciones');
    }
};
