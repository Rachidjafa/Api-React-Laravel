<?php

namespace App\Http\Controllers;

use App\Models\Salaries;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SalariesController extends Controller
{
    public function index()
    {
       return Salaries::select('id', 'Matricule', 'Nom', 'Salaire')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'Matricule'=>'required',
            'Nom' => 'required',
            'Salaire' => 'required'
        ]);
        Salaries::create($request->post());
        return response()->json([
            'message'=>'Salaries ajouté avec succès'
        ]);
    }

    public function show(Salaries $salaries)
    {
        return response()->json([
            'Salaries' => $salaries
        ]);
    }

    public function update(Request $request, Salaries $salaries)
    {
        $request->validate([
            'Matricule'=>'required',
            'Nom' => 'required',
            'Salaire' => 'required'
        ]);
        
        $salaries->fill($request->post())->update();

        return response()->json([
            'message' => 'Salaries mis à jour avec succès'
        ]);
    }

    public function destroy(Salaries $salaries)
    {
        $salaries->delete();
        return response()->json([
            'message' => 'Salaire supprimé avec succès'
        ]);
    }
}
