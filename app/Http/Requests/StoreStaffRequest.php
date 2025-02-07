<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStaffRequest extends FormRequest
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
            "id_no" => "string|unique:staffs,id_no",
            "branch_id" => "required:exists:branches,id",
            "first_name" => "required|string",
            "last_name" => "required|string",
            "address_line_1" => "nullable|string",
            "address_line_2" => "nullable|string",
            "code_name" => "required|string|unique:staffs,code_name",
            "phone" => "nullable|numeric"
        ];
    }
}
