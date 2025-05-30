import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-30 flex justify-center items-center animate-fade">
      <SignIn />
    </div>
  );
}
