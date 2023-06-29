interface Props {
  isLoading: boolean;
}

export default function Loader(props: Props) {
  const { isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <div role="status" aria-label="Loading" className="Loader">
      <div />
      <div />
      <div />
    </div>
  );
}
