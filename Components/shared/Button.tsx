import Link from "next/link";

const Button = () => {
  return (
    <Link href="/login">
      <button
        type="button"
        className="text-green-500 bg-white font-semibold rounded-lg text-md px-4 py-2 text-center"
      >
        Login
      </button>
    </Link>
  );
};

export default Button;
