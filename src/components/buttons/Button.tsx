interface Props {
  children: React.ReactNode
  buttonType?: string
  onClick?: () => void
}

export const Button = ({ children, buttonType, onClick }: Props) => {
  return (
    <button
      className={`p-2 text-white rounded-md bg-purple-950 hover:bg-purple-900 w-full ${
        buttonType === 'secondary' && 'bg-blue-950 hover:bg-blue-900'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
