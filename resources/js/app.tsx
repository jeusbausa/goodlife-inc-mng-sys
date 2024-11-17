import "@mantine/core/styles.css";
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { MantineProvider } from "@mantine/core";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ModalsProvider } from "@mantine/modals";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <MantineProvider>
                <ModalsProvider>
                    <App {...props} />
                </ModalsProvider>
            </MantineProvider>,
        );
    },
    progress: {
        color: "#4B5563",
    },
});
