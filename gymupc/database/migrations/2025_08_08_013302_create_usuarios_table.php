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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id'); // INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY
            $table->string('correo', 100); // VARCHAR(100)
            $table->string('contrasena', 400); // VARCHAR(400)
            $table->unsignedTinyInteger('rol'); // INT(1) UNSIGNED
            $table->unsignedTinyInteger('estado'); // INT(1) UNSIGNED
            $table->unsignedTinyInteger('verificacion'); // INT(1) UNSIGNED
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
