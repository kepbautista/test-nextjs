import Sidebar from "./layouts/Sidebar"
import SiteHeader from "./layouts/SiteHeader"

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="grid grid-rows-[106px_1fr] min-w-[720px] h-screen min-h-screen">
      <SiteHeader />
      <div className="relative overflow-hidden p-6">{children}</div>
    </div>
  )
}

export default RootLayout
