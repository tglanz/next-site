import config from '../config.json';
import withProps from './hoc/withProps';

interface Props {
  title: string,
  subtitle: string
}

const Headline = ({ title, subtitle }: Props) => {
  return (
    <div className="
        p-2
        border border-1 border-black rounded-lg
        flex flex-col items-center">
      <p className="text-4xl">{title}</p>
      <p className="text-lg">{subtitle}</p>
    </div>
  )
};

export default withProps({ ...config.headline })(Headline);