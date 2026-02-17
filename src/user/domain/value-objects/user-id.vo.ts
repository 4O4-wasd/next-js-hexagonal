export class UserId {
  private readonly value: string;

  constructor(id?: string) {
    this.value = id ?? crypto.randomUUID();
  }

  getValue() {
    return this.value;
  }

  equals(other: UserId) {
    return this.value === other.value;
  }
}
