// "use client";
// import { useState } from "react";
// import { Dialog } from "@headlessui/react";

// export default function ContactModal({
//   isOpen,
//   onClose,
//   hallName,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   hallName: string;
// }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     countryCode: "+966",
//     weddingDate: "",
//     budget: "",
//     capacity: "",
//     note: "",
//     acceptedTerms: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // You can call your API here
//   };

//   return (
//     <Dialog
//       open={isOpen}
//       onClose={onClose}
//       className="fixed inset-0 z-50 flex items-center justify-center"
//     >
//       <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative z-10">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-3">
//           <p className="text-lg font-semibold truncate">
//             {hallName} نموذج الاتصال
//           </p>
//           <button
//             type="button"
//             className="text-gray-500 hover:text-red-500"
//             onClick={onClose}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm">الاسم</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm">البريد الالكتروني</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             />
//           </div>

//           {/* Phone with country code */}
//           <div>
//             <label className="block text-sm">الهاتف</label>
//             <div className="flex gap-2">
//               <select
//                 name="countryCode"
//                 value={formData.countryCode}
//                 onChange={handleChange}
//                 className="border rounded-lg p-2"
//               >
//                 <option value="+966">+966</option>
//                 <option value="+20">+20</option>
//                 <option value="+971">+971</option>
//                 <option value="+1">+1</option>
//                 {/* add other codes here */}
//               </select>
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="flex-1 border rounded-lg p-2"
//               />
//             </div>
//           </div>

//           {/* Wedding Date */}
//           <div>
//             <label className="block text-sm">تاريخ الزفاف</label>
//             <select
//               name="weddingDate"
//               required
//               value={formData.weddingDate}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             >
//               <option value="">اختر تاريخ</option>
//               <option value="2025-09-15">سبتمبر ٢٠٢٥</option>
//               <option value="2025-10-15">أكتوبر ٢٠٢٥</option>
//               <option value="2025-11-15">نوفمبر ٢٠٢٥</option>
//               <option value="2025-12-15">ديسمبر ٢٠٢٥</option>
//               <option value="2026-01-15">يناير ٢٠٢٦</option>
//               {/* add other months */}
//             </select>
//           </div>

//           {/* Budget */}
//           <div>
//             <label className="block text-sm">الميزانية للشخص الواحد</label>
//             <select
//               name="budget"
//               required
//               value={formData.budget}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             >
//               <option value="500-450">500-450 ريال</option>
//               <option value="550-500">550-500 ريال</option>
//               <option value="550+">550 ريال أو أكثر</option>
//             </select>
//           </div>

//           {/* Capacity */}
//           <div>
//             <label className="block text-sm">عدد المدعويين (تقريبي)</label>
//             <select
//               name="capacity"
//               required
//               value={formData.capacity}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             >
//               <option value="50-100">100-50 شخص</option>
//               <option value="100-150">150-100 شخص</option>
//               <option value="150-250">250-150 شخص</option>
//               <option value="250-350">350-250 شخص</option>
//               <option value="350-500">500-350 شخص</option>
//               <option value="500+">500 شخص أو أكثر</option>
//             </select>
//           </div>

//           {/* Note */}
//           <div>
//             <label className="block text-sm">الرسالة</label>
//             <textarea
//               name="note"
//               rows={4}
//               value={formData.note}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-2"
//             />
//           </div>

//           {/* Terms */}
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               name="acceptedTerms"
//               checked={formData.acceptedTerms}
//               onChange={handleChange}
//               required
//             />
//             <span className="text-sm">
//               لقد قد قرأت نص{" "}
//               <a
//                 href="https://saudi-arabia.zafaf.net/corporate/privacy/terms"
//                 target="_blank"
//                 className="underline text-blue-600"
//               >
//                 اتفاقية المستخدم
//               </a>{" "}
//               وأقر بالموافقة عليها.
//             </span>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-pink-600 text-white py-2 rounded-lg"
//           >
//             احصل على عرض أسعار مجاني
//           </button>
//         </form>
//       </div>
//     </Dialog>
//   );
// }
