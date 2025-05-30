import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-10 flex justify-center items-center py-20 z-10 animate-fade">
      <SignUp />
    </div>
  );
}
