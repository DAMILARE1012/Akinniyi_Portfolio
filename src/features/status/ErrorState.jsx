import { CircleAlert, RotateCw } from 'lucide-react';
import Button from '../../components/Button';

export default function ErrorState({ onRetry }) {
  return (
    <main className="grid min-h-svh place-items-center px-5">
      <div role="alert" className="max-w-md text-center">
        <CircleAlert className="mx-auto size-10 text-danger" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold">Couldn&apos;t load the portfolio</h1>
        <p className="mt-2 text-muted">Please check your connection and try again.</p>
        <Button className="mt-6" onClick={onRetry}>
          <RotateCw className="size-4" aria-hidden="true" />
          Try again
        </Button>
      </div>
    </main>
  );
}
