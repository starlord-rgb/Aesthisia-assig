interface Props {
  className: any;
}

export const ArrowLeft = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 10H4.16666M4.16666 10L10 15.8333M4.16666 10L10 4.16667"
        stroke="#FCFCFC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};