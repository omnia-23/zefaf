"use client";

import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  ChangeEvent,
} from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export interface PhoneInputRef {
  value: string;
  isValid: () => boolean;
  getCountryCode: () => string | undefined;
}

const IntlPhoneInput = forwardRef<PhoneInputRef, {}>((_, ref) => {
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    get value() {
      return itiRef.current?.getNumber() || "";
    },
    isValid() {
      return itiRef.current?.isValidNumber() || false;
    },
    getCountryCode() {
      return itiRef.current?.getSelectedCountryData()?.iso2;
    },
  }));

  useEffect(() => {
    if (phoneInputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "sa",
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js",
      } as any);

      phoneInputRef.current.addEventListener("countrychange", () => {
        // console.log(
        //   "Country changed:",
        //   itiRef.current?.getSelectedCountryData()
        // );
      });
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fullNumber = itiRef.current?.getNumber() || "";
    console.log("Phone changed:", fullNumber);
  };

  return (
    <div className="w-full">
      <input
        ref={phoneInputRef}
        type="tel"
        dir="ltr"
        placeholder="000 000 000"
        onChange={handleChange}
        className="w-full pl-[92px] pr-0 text-xl py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ltr-input"
      />
    </div>
  );
});

IntlPhoneInput.displayName = "IntlPhoneInput";

export default IntlPhoneInput;
