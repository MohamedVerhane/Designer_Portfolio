export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 38V10h10.5c6.4 0 10.5 3.6 10.5 9.6 0 4.5-2.3 7.6-6.3 8.7L35 38h-7.2l-3.9-8.3H19.3V38H17Zm2.3-10.6h7.9c4 0 6.6-1.9 6.6-5.5 0-3.5-2.6-5.4-6.6-5.4h-7.9v10.9Z"
        className="fill-current"
      />
    </svg>
  )
}
