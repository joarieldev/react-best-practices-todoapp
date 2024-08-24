interface Props {
  children: React.ReactNode,
  buttonType?: string
}

export const Button = ({ children, buttonType }: Props) => {
  return (
    <button className={`p-2 text-white rounded-md bg-purple-950 hover:bg-purple-900 ${buttonType === 'secondary' && 'bg-pink-950 hover:bg-pink-900'}`}>
      {children}
    </button>
  )
}
