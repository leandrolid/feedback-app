import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { ScreenShotButton } from '../../Button/ScreenShotButton';
import { WidgetCloseButton } from '../../Button/WidgetCloseButton';
import { FeedbackType, feedbackTypes } from './FeedbackTypeStep';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  resetFeedbackType: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  resetFeedbackType,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const feedbackInfo = feedbackTypes[feedbackType];

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    // const form = new FormData(e.currentTarget as HTMLFormElement);
    // const feedbackMessage = form.get('feedbackMessage');

    console.log({
      screenshot,
      feedbackMessage,
    });

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={resetFeedbackType}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-lg leading-6 flex gap-2 items-center">
          <img
            src={feedbackInfo.icon.src}
            alt={feedbackInfo.icon.alt}
            className="w-6 h-6"
          />
          {feedbackInfo.title}
        </span>
        <WidgetCloseButton />
      </header>
      <form className="w-full flex flex-col gap-4 my-4" onSubmit={handleSubmitForm}>
        <textarea
          id="feedbackMessage"
          name="feedbackMessage"
          value={feedbackMessage}
          onChange={({ target }) => setFeedbackMessage(target.value)}
          placeholder="Conte com detalhes o que está acontecendo"
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin scrollbar-"
        />

        <fieldset className="flex gap-2">
          <ScreenShotButton setScreenshot={setScreenshot} screenshot={screenshot} />
          <button
            type="submit"
            disabled={!feedbackMessage}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex items-center justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </fieldset>
      </form>
    </>
  );
}
