import { Menu, Transition } from '@headlessui/react';
import { Button } from './button';
import { Receipt } from '@phosphor-icons/react';
import { Fragment } from 'react';
import { List } from '@phosphor-icons/react';
import { LoginModal } from './login-modal';
import { smoothScroll } from '../lib/utils';

export function Navbar() {
  return (
    <nav className="flex justify-between px-14 py-6">
      <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
        <Receipt className="h-6 w-6" weight="bold" />
        UpTech
      </span>
      <span className="hidden items-center md:gap-12 lg:flex">
        <Button variant="link" onClick={(e) => smoothScroll(e, 'about')}>
          Tentang
        </Button>
        <Button variant="link" onClick={(e) => smoothScroll(e, 'pricing')}>
          Harga
        </Button>
        <Button variant="link" onClick={(e) => smoothScroll(e, 'contact')}>
          Kontak
        </Button>
        <LoginModal />
      </span>
      <MobileNav />
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="lg:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button as={Fragment}>
            <Button variant="icon">
              <List className="h-6 w-6" weight="bold" />
            </Button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col gap-2 px-4 py-4">
              <Menu.Item>
                {({ close }) => (
                  <Button
                    variant="ghost"
                    className="flex w-full justify-center py-3"
                    onClick={(e) => {
                      smoothScroll(e, 'about');
                      close();
                    }}
                  >
                    Tentang
                  </Button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <Button
                    variant="ghost"
                    className="flex w-full justify-center py-3"
                    onClick={(e) => {
                      smoothScroll(e, 'pricing');
                      close();
                    }}
                  >
                    Harga
                  </Button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <Button
                    variant="ghost"
                    className="flex w-full justify-center py-3"
                    onClick={(e) => {
                      smoothScroll(e, 'contact');
                      close();
                    }}
                  >
                    Kontak
                  </Button>
                )}
              </Menu.Item>

              <LoginModal />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
