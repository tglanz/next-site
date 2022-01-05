import { Content } from "../../lib/content";

export interface Props {
  content: Content
}

export default (props: Props) => {
  const { content } = props;
  return (
    <div>
      <h1>Debug</h1>
      <pre>{JSON.stringify(content, null, 4)}</pre>
    </div>
  );
}