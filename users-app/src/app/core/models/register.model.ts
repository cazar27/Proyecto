export class DataRegisterForm {
  constructor(
    public username: string,
    public name: string,
    public surnames: string,
    public email: string,
    public password: string,
    public age: number,
    public active?: boolean,
  ) {}
}
