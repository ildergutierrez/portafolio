<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use App\Models\Persona;
use App\Models\usuarios;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Buscar usuario por email
        $user = usuarios::where('correo', $credentials['email'])->first();

        if (!$user) {
            return redirect()->back()->with('error', 'Correo no encontrado');
        }

        // Verificar contraseña
        if (!Hash::check($credentials['password'], $user->contrasena)) {
            return redirect()->back()->with('error', 'Contraseña incorrecta');
        }

        // Verificar estado de cuenta
        if ($user->verificacion != 1) {
            return redirect()->route('verificar.correo', ['correo' => base64_encode($user->correo)]);
        }

        // Obtener datos adicionales desde tabla persona
        $persona = Persona::where('documento', $user->id)->first();

        // Guardar en sesión
        Session::put('Email', $user->correo);
        Session::put('nombre', $this->convertirFrase(optional($persona)->{'nombre completo'} ?? ''));
        Session::put('documento', $user->id);
        Session::put('rol', $user->rol);
        Session::put('estado', $user->estado);
        Session::put('telefono', optional($persona)->celular ?? '');
        Session::put('genero', optional($persona)->sexo ?? '');

        // Redirigir a la dirección deseada (puedes ajustar la lógica)
        return redirect()->to($request->input('direccion', '/dashboard'));
    }

    private function convertirFrase($frase)
    {
        return ucwords(strtolower($frase));
    }
}
