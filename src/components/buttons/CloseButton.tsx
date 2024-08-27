interface Props {
  children: React.ReactNode
  openAuth?: () => void
}

export const CloseButton = ({ children, openAuth }: Props) => {
  return (
    <button
      type="button"
      className="end-2.5 bg-transparent rounded-lg text-sm font-bold w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-red-800 hover:text-white"
      onClick={openAuth}
    >
      {children}
    </button>
  )
}
