import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from './Form';

export function Widget() {
  return (
    <Popover className="fixed bottom-4 right-4 flex flex-col items-end md:bottom-7 md:right-7">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button
        type="button"
        className="bg-brand-500 rounded-full p-3 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="ml-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
