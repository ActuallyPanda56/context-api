export default function Error() {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 animate-pulse transition-all">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Somethings missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we cant find that page. Youll find lots to explore on the home page. </p>
            <a href="/" className="inline-flex text-white bg-purple-600 hover:bg-purple-500 hover:text-purple-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-colors">Back to Homepage</a>
        </div>   
    </div>
    </>
  )
}
