<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClusterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "staff_id" => "required|integer|exists:staffs,id",
            "branch_id" => "required|integer|exists:branches,id",
            "cluster_code" => "required|string|max:255",
            "date_of_release" => "required|date",
            "date_of_first_payment" => "required|date",
            "date_of_last_payment" => "required|date",
            "loan_term" => "required|integer|in:18,24",
        ];
    }
}
