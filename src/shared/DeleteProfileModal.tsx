"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { useAuth } from "@/lib/hooks/use-auth";

interface DeleteProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeleteProfileModal({ isOpen, onClose }: DeleteProfileModalProps) {
  const { logout } = useAuth();

  const handleDelete = () => {
    // Mock delete logic: just log out and clear storage
    logout();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 text-center">Delete Profile</DialogTitle>
          <DialogDescription className="text-gray-500 text-center pt-2">
            Are you sure you want to delete your profile? This action is permanent and cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-4 sm:justify-center">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto px-8"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="w-full sm:w-auto px-8 bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Profile
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
