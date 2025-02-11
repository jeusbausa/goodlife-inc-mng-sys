<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClusterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "staff_assigned" => $this->staff->full_name,
            "cluster_code" => $this->cluster_code,
            "date_of_release" => $this->date_of_release->format("M d, Y"),
            "date_of_first_payment" => $this->date_of_first_payment->format("M d, Y"),
            "date_of_last_payment" => $this->date_of_last_payment->format("M d, Y"),
            "loan_term" => $this->loan_term,
            "loan_cycle" => $this->loan_cycle,
            "status" => $this->status,
            "staff_assigned" => $this->staff->full_name,
            "branch_assigned" => $this->branch->name,
            "members" => $this->when(
                $this->members && $request->collect("with")->contains("members"),
                ClientResource::collection($this->members)
            ),
        ];
    }
}
