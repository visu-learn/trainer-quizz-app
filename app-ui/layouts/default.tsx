import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <Head />
      <Navbar />
      <div className="container mx-auto max-w-full flex-grow overflow-x-auto overflow-y-auto max-h-screen">
        <main className="container mx-auto max-w-7xl px-6 flex-grow  overflow-x-auto overflow-y-auto">
          {children}
        </main>
      </div>

      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">tHE MaskedCoder</p>
        </Link>
      </footer>
    </div>
  );
}
