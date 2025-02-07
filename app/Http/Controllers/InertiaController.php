<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClusterResource;
use App\Models\Branch;
use App\Models\Cluster;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InertiaController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function dashboard(Request $request): Response
    {
        return $this->inertiaRenderPage("Admin/Dashboard/Dashboard");
    }

    /**
     * Handle the incoming request.
     */
    public function branches(Request $request): Response
    {
        return $this->inertiaRenderPage("Admin/Branch/Branches");
    }

    /**
     * Handle the incoming request.
     */
    public function clients(Request $request): Response
    {
        return $this->inertiaRenderPage("Admin/Client/Clients");
    }

    /**
     * Handle the incoming request.
     */
    public function clusters(Request $request): Response
    {
        return $this->inertiaRenderPage("Admin/Cluster/Clusters");
    }

    /**
     * Handle the incoming request.
     */
    public function cluster(Request $request, Cluster $cluster): Response
    {
        $cluster = new ClusterResource($cluster->load("staff"));

        return $this->inertiaRenderPage("Admin/Cluster/Cluster", ["cluster" => $cluster->toArray($request)]);
    }

    /**
     * Handle the incoming request.
     */
    public function staffs(Request $request): Response
    {
        return $this->inertiaRenderPage("Admin/Staff/Staffs", [
            "branches" => Branch::select("id", "name")->get()
        ]);
    }
}
