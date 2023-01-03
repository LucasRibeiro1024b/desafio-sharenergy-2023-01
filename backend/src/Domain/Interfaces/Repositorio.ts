export interface Repository<T> {
  criar(data: T) : any;
  read(id: string): Promise<T | null>;
  update(id: string, data: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  findMany(query?: object): Promise<T[]>
}
