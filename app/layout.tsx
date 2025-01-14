// in app/layout.tsx

import { getSession } from "@/auth"
import Providers from "./providers"

// THIS WILL WORK

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession()

    return (
        <html lang="en">
            <body>
                <Providers session={session}>
                    {children}
                </Providers>
            </body>
        </html>
    )
}