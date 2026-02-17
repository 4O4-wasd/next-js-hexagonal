import { Email } from "../value-objects/email.vo";
import { UserId } from "../value-objects/user-id.vo";

export class User {
  constructor(
    private readonly id: UserId,
    private name: string,
    private email: Email,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(name: string, email: string) {
    if (!name || name.trim().length < 3) {
      throw new Error("Name must at least 3 characters long");
    }

    return new User(
      new UserId(),
      name.trim(),
      new Email(email),
      new Date(),
      new Date(),
    );
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  updateName(name: string) {
    if (!name || name.trim().length < 3) {
      throw new Error("Name must at least 3 characters long");
    }

    this.name = name;
    this.updatedAt = new Date();
  }

  updateEmail(email: string) {
    this.email = new Email(email);
    this.updatedAt = new Date();
  }

  getAge() {
    const now = new Date();
    const difference = Math.abs(now.getTime() - this.createdAt.getTime());
    return Math.ceil(difference / (24 * 60 * 60 * 1000));
  }
}
