"use client";

/**
 *
 * @todo refactor
 * @author jimmy,jeus
 */
export default function AddressForm() {
    // const {
    //     form,
    //     submit,
    //     result: { data, serverError },
    //     isLoading,
    // } = useActionForm(
    //     serverAction,
    //     {
    //         resetOnSuccess: false,
    //         successMessage: "Address successfully updated",
    //         initialValues: { address1, address2, country, city, zip, state, id },
    //     },
    //     {
    //         onSuccess: () => {
    //             if (isFunction(onSuccess)) {
    //                 onSuccess();
    //             }
    //         },
    //     }
    // );

    // return (
    //     <form onSubmit={submit}>
    //         <ResultMessage
    //             successTitle="Address successfully updated."
    //             serverError={`${serverError}`}
    //             result={
    //                 data as {
    //                     success: boolean;
    //                     message: string | null;
    //                 }
    //             }
    //         />
    //         <Stack>
    //             <TextInput
    //                 withAsterisk
    //                 label="Address Line 1"
    //                 disabled={isLoading}
    //                 {...form.getInputProps("address1")}
    //             />
    //             <TextInput label="Address Line 2" disabled={isLoading} {...form.getInputProps("address2")} />
    //             <CountrySelect
    //                 serverAction={countryServerAction}
    //                 allowedCountriesOnly
    //                 searchable
    //                 withAsterisk
    //                 label="Country"
    //                 disabled={isLoading}
    //                 {...form.getInputProps("country")}
    //             />
    //             <Grid>
    //                 <ResponsiveGridCol>
    //                     <TextInput withAsterisk label="State" disabled={isLoading} {...form.getInputProps("state")} />
    //                 </ResponsiveGridCol>
    //                 <ResponsiveGridCol>
    //                     <TextInput withAsterisk label="City" disabled={isLoading} {...form.getInputProps("city")} />
    //                 </ResponsiveGridCol>
    //                 <ResponsiveGridCol>
    //                     <TextInput withAsterisk label="ZIP" disabled={isLoading} {...form.getInputProps("zip")} />
    //                 </ResponsiveGridCol>
    //             </Grid>
    //             <Group justify="flex-end" mt="md">
    //                 <Button type="submit" size="sm" loading={isLoading}>
    //                     Update address
    //                 </Button>
    //             </Group>
    //         </Stack>
    //     </form>
    // );

    return <></>;
}
