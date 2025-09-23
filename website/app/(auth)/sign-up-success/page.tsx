export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-6 border rounded-md p-6 bg-white">
        <div>
          <h1 className="text-2xl font-semibold">Thank you for signing up!</h1>
          <p className="text-gray-600 text-sm">Check your email to confirm</p>
        </div>
        <p className="text-sm text-gray-500">
          You&apos;ve successfully signed up. Please check your email to confirm
          your account before signing in.
        </p>
      </div>
    </div>
  );
}
