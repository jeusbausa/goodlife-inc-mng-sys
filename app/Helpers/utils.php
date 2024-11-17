<?php

use Illuminate\Support\Str;

/**
 * Undocumented function
 *
 * @param  array|null  $parameters
 * @return array
 */
if (!function_exists("convertDimensionKeyToCamel")) {
    function convertDimensionKeyToCamel(?array $parameters): array
    {
        $new_payload = [];

        if (!empty($parameters)) {
            foreach ($parameters as $key => $value) {
                logger([$key, json_encode($value)]);
                $new_payload[Str::camel($key)] = is_array($value)
                    ? convertDimensionKeyToCamel($value)
                    : $value;
            }
        }
        return $new_payload;
    }
}

/**
 * Undocumented function
 *
 * @param  array|null  $parameters
 * @return array
 */
if (!function_exists("convertDimensionKeyToSnake")) {
    function convertDimensionKeyToSnake(?array $parameters): array
    {
        $new_payload = [];

        if (!empty($parameters)) {
            foreach ($parameters as $key => $value) {
                $new_payload[Str::snake($key)] = is_array($value)
                    ? convertDimensionKeyToSnake($value)
                    : $value;
            }
        }

        return $new_payload;
    }
}
