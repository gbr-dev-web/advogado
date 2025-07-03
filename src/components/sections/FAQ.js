export default function FAQ() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="max-w-2xl mb-6 text-center mx-auto text-2xl font-semibold tracking-tight xl:text-3xl font-serif text-black">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
