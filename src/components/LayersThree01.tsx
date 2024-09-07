

interface Props {
  className: any;
}

export const LayersThree01 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12L11.6422 16.8211C11.7734 16.8867 11.839 16.9195 11.9078 16.9324C11.9687 16.9438 12.0313 16.9438 12.0922 16.9324C12.161 16.9195 12.2266 16.8867 12.3578 16.8211L22 12M2 17L11.6422 21.8211C11.7734 21.8867 11.839 21.9195 11.9078 21.9324C11.9687 21.9438 12.0313 21.9438 12.0922 21.9324C12.161 21.9195 12.2266 21.8867 12.3578 21.8211L22 17M2 7L11.6422 2.17888C11.7734 2.11329 11.839 2.0805 11.9078 2.06759C11.9687 2.05616 12.0313 2.05616 12.0922 2.06759C12.161 2.0805 12.2266 2.11329 12.3578 2.17888L22 7L12.3578 11.8211C12.2266 11.8867 12.161 11.9195 12.0922 11.9324C12.0313 11.9438 11.9687 11.9438 11.9078 11.9324C11.839 11.9195 11.7734 11.8867 11.6422 11.8211L2 7Z"
        stroke="#A1A1AA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};