import { AuthContainer } from "../../components/auth-container";
import { Dialog, DialogContent, DialogTrigger } from "../../../ui/dialog";

interface AuthModalProps {
  trigger: React.ReactNode;
}

export default function AuthModal({ trigger }: AuthModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-[80vw] lg:max-w-[1100px] p-0 overflow-hidden border-none bg-transparent shadow-2xl">
        <AuthContainer />
      </DialogContent>
    </Dialog>
  );
}
