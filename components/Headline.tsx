interface Props {
  title: string,
  subtitle: string
}

const Headline = ({ title, subtitle }: Props) => {
  return (
    <div className="
        p-2
        flex flex-col items-center">
      <p className="text-4xl">{title}</p>
      <p className="text-lg">{subtitle}</p>
    </div>
  )
};

export default Headline;