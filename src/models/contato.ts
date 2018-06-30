export class Contato {
  public nome:string;
  public email: string;
  public imagem: string;

  constructor(nome?:string, email?:string, imagem?: string ) {
    this.nome = nome;
    this.email = email;
    this.imagem = imagem;
  }

}