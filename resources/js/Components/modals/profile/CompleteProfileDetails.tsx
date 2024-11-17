"use client";

/**
 *
 * @todo refactor
 * @author jimmy,jeus
 */
export default function CompleteProfileDetails() {
    return <></>;
    // const [isSuccess, setIsSuccess] = useState(false);
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
    //             setIsSuccess(true);
    //         },
    //     }
    // );

    // return (
    //     <>
    //         {!isSuccess && (
    //             <ResultMessage
    //                 successTitle="Seems like you missed out some information in your profile. Please fill them out before buying."
    //                 result={{ success: false, message: errorMessage }}
    //             />
    //         )}
    //         <Stack>
    //             <ContactDetailsForm
    //                 id={user.id}
    //                 mobileNumber={user.mobileNumber}
    //                 serverAction={contactDetailsServerAction}
    //                 onSuccess={() => setIsSuccess(true)}
    //             />
    //         </Stack>
    //         <Divider my="lg" />
    //         <Stack>
    //             <form onSubmit={submit}>
    //                 <ResultMessage
    //                     successTitle="Address successfully updated."
    //                     serverError={`${serverError}`}
    //                     result={
    //                         data as {
    //                             success: boolean;
    //                             message: string | null;
    //                         }
    //                     }
    //                 />
    //                 <Stack>
    //                     <TextInput
    //                         withAsterisk
    //                         label="Address Line 1"
    //                         disabled={isLoading}
    //                         {...form.getInputProps("address1")}
    //                     />
    //                     <TextInput label="Address Line 2" disabled={isLoading} {...form.getInputProps("address2")} />
    //                     <CountrySelect
    //                         serverAction={countryServerAction}
    //                         allowedCountriesOnly
    //                         searchable
    //                         withAsterisk
    //                         label="Country"
    //                         disabled={isLoading}
    //                         {...form.getInputProps("country")}
    //                     />
    //                     <Grid>
    //                         <ResponsiveGridCol>
    //                             <TextInput
    //                                 withAsterisk
    //                                 label="State"
    //                                 disabled={isLoading}
    //                                 {...form.getInputProps("state")}
    //                             />
    //                         </ResponsiveGridCol>
    //                         <ResponsiveGridCol>
    //                             <TextInput
    //                                 withAsterisk
    //                                 label="City"
    //                                 disabled={isLoading}
    //                                 {...form.getInputProps("city")}
    //                             />
    //                         </ResponsiveGridCol>
    //                         <ResponsiveGridCol>
    //                             <TextInput
    //                                 withAsterisk
    //                                 label="ZIP"
    //                                 disabled={isLoading}
    //                                 {...form.getInputProps("zip")}
    //                             />
    //                         </ResponsiveGridCol>
    //                     </Grid>
    //                     <Group justify="flex-end" mt="md">
    //                         <Button type="submit" size="sm" loading={isLoading}>
    //                             Update address
    //                         </Button>
    //                     </Group>
    //                 </Stack>
    //             </form>
    //             <AddressForm
    //                 address1={user.address1}
    //                 address2={user.address2}
    //                 country={user.country}
    //                 city={user.city}
    //                 zip={user.zip}
    //                 state={user.state}
    //                 id={user.id}
    //                 serverAction={addressServerAction}
    //                 countryServerAction={countryServerAction}
    //                 onSuccess={() => setIsSuccess(true)}
    //             />
    //         </Stack>
    //     </>
    // );
}
