import { Button } from "@/components/ui/button";

export default function FeatureRequest() {
  return (
    <div className="hidden xlg:block w-80 flex-shrink-0">
      <div className="bg-gray-50 p-6 rounded-2xl sticky top-24 border border-gray-100">
        <h3 className="font-bold text-lg mb-2">Request a Feature</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          We&apos;re working behind the scenes for you to enjoy the Community.
          If you have a great idea, feel free to drop it in.
        </p>

        <Button
          onClick={() => window.open("https://discord.gg/2Sby35W", "_blank")}
          className="w-full bg-black text-white font-bold text-sm py-3 rounded-lg hover:bg-pink-bright transition-colors shadow-lg shadow-gray-200"
        >
          Submit An Idea
        </Button>
      </div>
    </div>
  );
}
