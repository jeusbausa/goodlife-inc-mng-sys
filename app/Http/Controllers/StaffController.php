<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStaffRequest;
use App\Http\Requests\UpdateStaffRequest;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $staff = Staff::orderBy("created_at", "DESC")
            ->when($request->keyword, fn(Builder $query, $keyword) => $query
                ->where("first_name", "LIKE", "%{$keyword}%")
                ->orWhere("last_name", "LIKE", "%{$keyword}%"))
            ->when($request->branch_id, fn(Builder $query, $branch_id) => $query->where("branch_id", $branch_id));

        return response()->json($staff->paginate());
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
    public function store(StoreStaffRequest $request): JsonResponse
    {
        Staff::create([
            "id_no" => $request->id_no,
            "branch_id" => $request->branch_id,
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "address_line_1" => $request->address_line_1,
            "address_line_2" => $request->address_line_2,
            "code_name" => $request->code_name,
            "phone" => $request->phone,
        ]);

        return response()->json();
    }

    /**
     * Display the specified resource.
     */
    public function show(Staff $staff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Staff $staff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStaffRequest $request, Staff $staff)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Staff $staff)
    {
        //
    }
}
