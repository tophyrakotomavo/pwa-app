import { InstallAppChecker } from "./_components/install-app-checker";
import { Message } from "./_components/message";

export const HomePage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <InstallAppChecker />
      <Message />
    </div>
  );
};

export default HomePage;
