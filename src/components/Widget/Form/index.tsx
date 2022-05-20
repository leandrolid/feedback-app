import { useState } from 'react';

import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackType, FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  const resetFeedbackType = () => setFeedbackType(null);
  const onFeedbackSent = () => setIsFeedbackSent(true);
  const onFeedbackReset = () => {
    setIsFeedbackSent(false);
    resetFeedbackType();
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSent ? (
        <FeedbackSuccessStep onFeedbackReset={onFeedbackReset} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep chooseFeedback={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              resetFeedbackType={resetFeedbackType}
              onFeedbackSent={onFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{' '}
        <a
          href="https://www.linkedin.com/in/leandrolid"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-neutral-300"
        >
          Leandro
        </a>
      </footer>
    </div>
  );
}
