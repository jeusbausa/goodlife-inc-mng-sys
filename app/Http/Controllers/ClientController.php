<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $client = Client::orderBy("created_at", "DESC")
            ->when($request->keyword, fn(Builder $query, $keyword) => $query
                ->where("first_name", "LIKE", "%{$keyword}%")
                ->orWhere("last_name", "LIKE", "%{$keyword}%"));

        return ClientResource::collection($client->paginate());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        Client::create([
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "address_line_1" => $request->address_line_1,
            "address_line_2" => $request->address_line_2,
            "birthday" => $request->birthday,
            "phone" => $request->phone,
        ]);

        return response()->json();
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
