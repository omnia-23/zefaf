"use client";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";

const BookingModal = ({
  hallSlug,
  isOpen,
  setIsOpen,
}: {
  hallSlug: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full h-[80%] overflow-y-auto max-w-lg bg-white rounded-2xl shadow-xl p-4 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>

          <Dialog.Title className="text-lg font-semibold text-center mb-4">
            نموذج طلب القاعة
          </Dialog.Title>

          {/* Booking Form inside modal */}
          <BookingForm hallSlug={hallSlug} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BookingModal;
