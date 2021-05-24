import { ReactNode } from 'react'

export function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white flex flex-col rounded-xl overflow-hidden shadow-xl max-h-[720px] max-w-[1280px] w-[80vw] h-[45vw]">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-300 w-3 h-3 rounded-full" />
              <div className="bg-gray-300 w-3 h-3 rounded-full" />
              <div className="bg-gray-300 w-3 h-3 rounded-full" />
            </div>
          </div>
          <div className="h-full rounded-b-xl overflow-auto divide-y divide-y-200">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className="bg-white p-6 flex space-x-12">
                <div className="space-y-3 flex-shrink-0 w-1/3">
                  <div className="rounded-full bg-gray-300 h-2 w-full"></div>
                  <div className="rounded-full bg-gray-200 h-2 w-3/4"></div>
                </div>
                <div className="rounded-full bg-gray-300 h-2 w-2/3"></div>
                <div className="rounded-full bg-gray-300 h-2 w-1/3"></div>
                <div className="rounded-full bg-gray-300 h-2 w-2/3"></div>
                <div className="text-right">{children}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full bg-black bg-opacity-10 text-white text-opacity-80 px-4 py-3">
        <div className="text-center space-x-12 text-lg leading-6">
          <span>@malfaitrobin</span>
          <span>robinmalfait.com/uses</span>
          <span>headlessui.dev</span>
          <span>tailwindcss.com</span>
        </div>
      </div>
    </div>
  )
}
