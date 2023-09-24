import { Fragment, useState } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowNarrowRightIcon, XIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Product', href: '#', items: [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ] },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group as="div" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Popover key={item.name} className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>{item.name}</span>
                      {item.items ? (
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      ) : null}
                    </Popover.Button>

                    {item.items ? (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/2 left-1/2 min-w-max">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white p-5 sm:gap-8 sm:p-8">
                              {item.items.map((product) => (
                                <a
                                  key={product.name}
                                  href={product.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src={product.icon} alt="" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{product.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="p-5 bg-gray-800 sm:p-8">
                              <a
                                href="#"
                                className="flow-root group"
                              >
                                <span className="text-base font-medium text-white">Watch the demo</span>
                                <span className="block mt-2 text-sm font-medium text-indigo-200">
                                  <span className="block">Want to see a demo?</span>
                                </span>
                              </a>
                              <a
                                href="#"
                                className="mt-3 flow-root group"
                              >
                                <span className="text-base font-medium text-white">Contact sales</span>
                                <span className="block mt-2 text-sm font-medium text-indigo-200">
                                  <span className="block">We're here to help and answer any question you might have.</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    ) : null}
                  </>
                )}
              </Popover>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Log in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
