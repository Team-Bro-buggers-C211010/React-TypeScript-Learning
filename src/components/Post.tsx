import Card from "./Card";

const Post = () => {
  return (
    <Card>
      <div
        style={{
          backgroundColor: "bisque",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          border: "1px solid black",
          margin: "10px 0",
          boxShadow: "0.1rem 0.1rem 0.1rem red",
        }}
      >
        <h2>Post Title 1</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          excepturi ipsam commodi voluptatibus fugiat dolorem ullam doloribus?
          Aliquid aliquam unde adipisci velit assumenda corporis reiciendis
          recusandae! Deserunt laborum sequi officia totam vel laudantium
          molestias quasi itaque temporibus vitae nesciunt adipisci eos
          blanditiis nihil cum, dolorum, fuga praesentium eveniet nemo velit.
        </p>
      </div>
    </Card>
  );
};

export default Post;
