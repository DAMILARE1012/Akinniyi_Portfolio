import Container from '../../components/Container';
import Skeleton from '../../components/Skeleton';

// Mirrors the hero layout while content loads so nothing jumps when it arrives.
export default function PageSkeleton() {
  return (
    <div role="status" aria-label="Loading portfolio">
      <div className="h-16 border-b border-line" />
      <Container className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:py-24">
        <div className="space-y-5">
          <Skeleton className="h-7 w-64 rounded-full" />
          <Skeleton className="h-14 w-4/5" />
          <Skeleton className="h-14 w-3/5" />
          <Skeleton className="h-24 w-full max-w-xl" />
          <div className="flex gap-3">
            <Skeleton className="h-11 w-36 rounded-full" />
            <Skeleton className="h-11 w-36 rounded-full" />
          </div>
        </div>
        <Skeleton className="mx-auto aspect-square w-full max-w-[280px] rounded-2xl sm:max-w-sm lg:max-w-[420px]" />
      </Container>
    </div>
  );
}
