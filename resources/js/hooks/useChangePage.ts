import { usePage, router } from "@inertiajs/react";

export default function useChangePage() {
    const _inertia = usePage();
    const searchParams = new URL(`${_inertia.props.appUrl}/${_inertia.url}`)
        .searchParams;

    const page = Number(searchParams.get("page") ?? 1);

    const changePage = (page: number) => {
        const newSearchParams = new URLSearchParams(searchParams);

        newSearchParams.set("page", `${page}`);

        router.get(`?${newSearchParams.toString()}`);
    };

    return { page, changePage };
}
