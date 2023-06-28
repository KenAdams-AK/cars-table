type Props = {
  isLoading: boolean;
};

export default function LoaderFallback(props: Props) {
  const { isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <div role="status" aria-label="Loading" className="LoaderFallback">
      <div />
      <div />
      <div />
    </div>
  );
}
