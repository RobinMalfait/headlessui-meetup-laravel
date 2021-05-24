import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'

export default function Actions() {
  let actions = [
    [{ name: 'Download PDF' }, { name: 'Duplicate', disabled: true }],
    [{ name: 'Send' }, { name: 'Pay' }],
    [{ name: 'Delete' }],
  ]

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center justify-center rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-pink-700">
          <DotsVerticalIcon className="h-5 w-5 text-gray-400" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 origin-top-right z-10 flex flex-col bg-white shadow rounded-lg my-2 focus:outline-none divide-y divide-gray-100 w-48">
            {actions.map((group, idx) => (
              <div className="p-1" key={idx}>
                {group.map((action) => (
                  <Menu.Item
                    key={action.name}
                    as="button"
                    disabled={action.disabled}
                    onClick={() => {
                      alert('Invoking: ' + action.name)
                    }}
                    className={({ active, disabled }) =>
                      `w-full px-2 py-1 text-left rounded-md ${
                        active ? 'bg-pink-600 text-white' : 'text-gray-600'
                      } ${disabled ? 'opacity-25 cursor-default' : ''}`
                    }
                  >
                    {action.name}
                  </Menu.Item>
                ))}
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
