import "~/styles/globals.css"
import tailwindConfig from "tailwind-config"

export default async function Page() {
    console.log("tailwindConfig", tailwindConfig)

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="bold text-6xl font-serif text-primary">Hello World</h1>
        </div>
    )
}
