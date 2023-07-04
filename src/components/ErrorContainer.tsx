type Props = {
  error: string | null;
};

export default function ErrorContainer(props: Props) {
  const { error } = props;

  if (!error) {
    return null;
  }

  return (
    <div role="alert" aria-label="Error message" className="ErrorContainer">
      {error}
    </div>
  );
}
