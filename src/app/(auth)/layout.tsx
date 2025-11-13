export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        {/* Logo dan Title */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Orienteering Championship
          </h1>
          <p className='mt-2 text-gray-600'>
            Kejuaraan Orienteering Nasional 2024
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
