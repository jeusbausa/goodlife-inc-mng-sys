<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            "full_name" => $this->fullname,
            "first_name" => $this->first_name,
            "last_name" => $this->last_name,
            "address_line_1" => $this->address_line_1,
            "address_line_2" => $this->address_line_2,
            "birthday" => $this->birthday->format("M d, Y"),
            "loan_cycle" => $this->loan_cycle,
            "phone" => $this->phone,
        ];
    }
}
