<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreviewRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:64',
            'image' => 'required',
            'description' => 'required|string|max:256',
            'user_id' => 'required|integer',
        ];
    }


    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */

    public function messages(): array
    {
        return [
            'name.required' => 'Preview name is required.',
            'name.string' => 'Preview name must be a string.',
            'name.max' => 'Preview name may not be greater than 32 characters.',
            'image.required' => 'Preview image is required.',
            'description.required' => 'Description name is required.',
            'description.string' => 'Description name must be a string.',
            'description.max' => 'Description name may not be greater than 32 characters.',
        ];
    }
}