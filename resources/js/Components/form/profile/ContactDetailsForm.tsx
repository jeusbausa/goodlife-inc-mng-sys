"use client";

/**
 *
 * @todo refactor
 * @author jimmy,jeus
 */
export default function ContactDetailsForm() {
    return <></>;

    // const { form, submit, isLoading } = useActionForm(
    //     serverAction,
    //     {
    //         successMessage: "Contact details successfully updated",
    //         resetOnSuccess: false,
    //         initialValues: { id, mobileNumber: mobileNumber ?? "" },
    //         transformValues: (values) => ({
    //             ...values,
    //             mobileNumber: values.mobileNumber?.replace(/[\s()-]/g, "") ?? null,
    //         }),
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
    //         <Stack>
    //             <MobileNumber
    //                 withAsterisk
    //                 disabled={isLoading}
    //                 onAccept={(value) => {
    //                     form.setFieldValue("mobileNumber", value);
    //                 }}
    //                 {...form.getInputProps("mobileNumber")}
    //             />
    //             <Group justify="flex-end" mt="md">
    //                 <Button type="submit" loading={isLoading}>
    //                     Update
    //                 </Button>
    //             </Group>
    //         </Stack>
    //     </form>
    // );
}
