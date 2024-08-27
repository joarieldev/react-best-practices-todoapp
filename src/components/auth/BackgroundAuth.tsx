interface Props {
  openAuth: () => void
}

export const BackgroundAuth = ({ openAuth }: Props) => {
  return (
    <div
      id="authentication-modal"
      className="fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/70"
      onClick={openAuth}
    ></div>
  )
}
