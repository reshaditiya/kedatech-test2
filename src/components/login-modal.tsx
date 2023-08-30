import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Button } from './button';
import {
  ArrowRight,
  EnvelopeSimple,
  FacebookLogo,
  GoogleLogo,
  Lock,
} from '@phosphor-icons/react';
import { SectionTitle } from './section-title';
import { ButtonHTMLAttributes } from 'react';

type LoginModalProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function LoginModal({ className, ...props }: LoginModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button onClick={openModal} className={className} {...props}>
        Masuk
        <ArrowRight className="h-5 w-5" weight="bold" />
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-3xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <SectionTitle
                      title="Masuk Aplikasi"
                      description="Silahkan masuk untuk mengakses UpTech by Keda"
                    />
                  </Dialog.Title>
                  <form
                    action=""
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-5 flex flex-col items-center lg:flex-1 lg:items-start"
                  >
                    <label className="relative mt-2 w-full">
                      <EnvelopeSimple
                        className="absolute left-6 top-4 h-6 w-6 text-cyan-700"
                        weight="duotone"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-3xl border-2 border-slate-200 py-4 pl-14 pr-5"
                      />
                    </label>
                    <label className="relative mt-2 w-full">
                      <Lock
                        className="absolute left-6 top-4 h-6 w-6 text-cyan-700"
                        weight="duotone"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-3xl border-2 border-slate-200 py-4 pl-14 pr-5"
                      />
                    </label>
                    <div className="mt-5 flex w-full gap-2">
                      <Button variant="primary" onClick={closeModal}>
                        Masuk
                        <ArrowRight className="h-5 w-5" weight="bold" />
                      </Button>
                      <Button variant="icon" className="ml-auto">
                        <GoogleLogo className="h-6 w-6" weight="bold" />
                      </Button>
                      <Button variant="icon">
                        <FacebookLogo className="h-6 w-6" weight="bold" />
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
