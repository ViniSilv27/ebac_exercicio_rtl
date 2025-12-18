import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve permitir  a inserção de dois comentários", () => {
    render(<PostComment />);
    const commentInput = screen.getByTestId("comment-input");
    const commentButton = screen.getByTestId("comment-button");
    //inserir o primeiro comentário
    fireEvent.change(commentInput, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(commentButton);
    //inserir o segundo comentário
    fireEvent.change(commentInput, { target: { value: "segundo comentario"}});
    fireEvent.click(commentButton);
    //verificar se os dois comentários foram inseridos
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("segundo comentario")).toBeInTheDocument();


  });
});
