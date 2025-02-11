<?php

namespace App\Http\Controllers;

use App\Http\Enums\ClusterStatus;
use App\Http\Requests\StoreClusterRequest;
use App\Http\Requests\UpdateClusterRequest;
use App\Http\Resources\ClusterResource;
use App\Models\Cluster;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Inertia\Inertia;


class ClusterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {
        return ClusterResource::collection(Cluster::orderBy("created_at", "DESC")->paginate());
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
    public function store(StoreClusterRequest $request): Response
    {
        Cluster::create([
            "staff_id" => $request->staff_id,
            "branch_id" => $request->branch_id,
            "cluster_code" => $request->cluster_code,
            "status" => ClusterStatus::NEW,
            "date_of_release" => $request->date_of_release,
            "date_of_first_payment" => $request->date_of_first_payment,
            "date_of_last_payment" => $request->date_of_last_payment,
            "loan_term" => $request->loan_term,
        ]);

        return response()->noContent();
    }

    /**
     * Display the specified resource.
     */
    public function show(Cluster $cluster): ClusterResource
    {
        return new ClusterResource($cluster->load("members"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cluster $cluster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClusterRequest $request, Cluster $cluster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cluster $cluster)
    {
        //
    }
}
