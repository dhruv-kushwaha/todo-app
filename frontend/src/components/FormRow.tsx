import { ReactNode } from "react";

interface FormRowProps {
  children: ReactNode;
  label?: string;
}

function FormRow({ children, label }: FormRowProps) {
  return (
    <div className=" items-center gap-5">
      <label className="text-sm font-semibold uppercase text-slate-800">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
