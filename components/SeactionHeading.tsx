type SeactionHeadingProps = {
    children: React.ReactNode
    
}

const SeactionHeading = ({children}: SeactionHeadingProps) => {
  return (
    <h2 className="font-medium text-2xl capitalize text-center">{children}</h2>
  )
}
export default SeactionHeading