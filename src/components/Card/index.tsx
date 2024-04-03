import "./styles.css";

interface Card{
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  time?: any;
}

export function Card(props: Card) {
  return (
    <div className="card">
      <strong>{props.content}</strong>
      <small>{props.time}</small>
    </div>
  );
}