export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm border rounded-md p-6 bg-white space-y-4">
        <h1 className="text-2xl font-semibold">
          Sorry, something went wrong.
        </h1>
        <p className="text-sm text-gray-500">
          {params?.error
            ? `Code error: ${params.error}`
            : "An unspecified error occurred."}
        </p>
      </div>
    </div>
  );
}
