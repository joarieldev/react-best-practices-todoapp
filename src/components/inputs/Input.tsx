interface Props {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoFocus?: boolean
  required?: boolean
  placeholder?: string
  type?:string
  name?:string
}

export const Input = ({ value, onChange, autoFocus, required, placeholder, type, name }: Props) => {
  return (
    <input
      type={type}
      className="w-full px-3 py-2 rounded-md text-purple-950 ring-purple-400 ring-2 placeholder-slate-400 focus:outline-none focus:ring-purple-500 sm:text-sm focus:ring-4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      required={required}
      name={name}
    />
  )
}
