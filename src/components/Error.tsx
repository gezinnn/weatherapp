type Props = {
  message: string;
};

export default function Error({ message }: Props) {
  return <p className="text-red-400">{message}</p>
}
