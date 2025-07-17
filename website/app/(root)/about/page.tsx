import React from "react";

const page = () => {
  return (
    <>
      <div className="font-[100] text-xs">
        The quick brown Fox jumps over the lazy Dog (font-thin)
      </div>
      <div className="font-[300] text-sm">
        The quick brown Fox jumps over the lazy Dog (font-light)
      </div>
      <div className="font-[400] text-base">
        The quick brown Fox jumps over the lazy Dog (font-regular)
      </div>
      <div className="font-[500] text-lg">
        The quick brown Fox jumps over the lazy Dog (font-medium)
      </div>
      <div className="font-[700] text-xl">
        The quick brown Fox jumps over the lazy Dog (font-bold)
      </div>
      <div className="font-[800] text-2xl">
        The quick brown Fox jumps over the lazy Dog (font-extrabold)
      </div>
      <div className="font-[900] text-3xl">
        The quick brown Fox jumps over the lazy Dog (font-black)
      </div>
      <div className="italic text-xl">
        The quick brown Fox jumps over the lazy Dog (italic)
      </div>
    </>
  );
};

export default page;
